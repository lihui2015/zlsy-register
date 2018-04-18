package cn.edu.zstu.pdfreader;

import android.content.res.Configuration;
import android.graphics.Color;
import android.graphics.PointF;
import android.graphics.drawable.ColorDrawable;
import android.graphics.drawable.Drawable;
import android.os.Bundle;
import android.support.annotation.NonNull;
import android.support.v4.widget.DrawerLayout;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.util.Log;
import android.view.Gravity;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.MotionEvent;
import android.view.View;
import android.view.ViewConfiguration;
import android.view.ViewGroup;
import android.view.WindowManager;
import android.widget.BaseAdapter;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.PopupWindow;
import android.widget.RadioButton;
import android.widget.RatingBar;
import android.widget.TextView;
import android.widget.Toast;

import com.github.barteksc.pdfviewer.PDFView;
import com.github.barteksc.pdfviewer.listener.OnPageChangeListener;
import cn.edu.zstu.R;
import cn.edu.zstu.pdfreader.bean.DirectoryBean;
import cn.edu.zstu.pdfreader.file.FileManager;
import cn.edu.zstu.pdfreader.net.HttpClient;
import cn.edu.zstu.pdfreader.net.SimpleCallback;

import java.io.File;

public class PDFReaderActivity extends AppCompatActivity implements FileManager.PDFCallback {

    private DrawerLayout mDrawerLayout;
    private PDFView mPDFView;
    private ListView mCatalogView;
    private PopupWindow mReaderMenu;
    private int mScaledTouchSlop = 0;
    private PointF pressedPoint;
    int id = 1;
    String token = "90dfc453c7c32d7527238d85b47ab4b4";

    protected static final float FLIP_DISTANCE = 50;
    private Configuration mConfiguration;
    int pageTotal = -1;
    int pageCurrent = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setStatusBarVisibility(View.GONE);
        setContentView(R.layout.activity_reader);
        mConfiguration = getResources().getConfiguration();
        mScaledTouchSlop = ViewConfiguration.get(this).getScaledTouchSlop();
        mDrawerLayout = findViewById(R.id.drawer_layout);
        mDrawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_LOCKED_CLOSED);
        mDrawerLayout.addDrawerListener(new DrawerLayout.DrawerListener() {
            @Override
            public void onDrawerSlide(@NonNull View drawerView, float slideOffset) {

            }

            @Override
            public void onDrawerOpened(@NonNull View drawerView) {
                mDrawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_UNLOCKED);
            }

            @Override
            public void onDrawerClosed(@NonNull View drawerView) {
                mDrawerLayout.setDrawerLockMode(DrawerLayout.LOCK_MODE_LOCKED_CLOSED);
            }

            @Override
            public void onDrawerStateChanged(int newState) {

            }
        });
        mPDFView = findViewById(R.id.pdf_view);
        mCatalogView = findViewById(R.id.catalog_view);
        mCatalogView.setOnItemClickListener((parent, view, position, id) -> {
            FileManager.load(position, PDFReaderActivity.this);
            mDrawerLayout.closeDrawer(Gravity.START);
        });

        id = getIntent().getIntExtra("book_id", 0);
        token = getIntent().getStringExtra("token");

        testGetHttpData();
    }

    private void testGetHttpData() {
        FileManager.init(this, id, token, this);
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        FileManager.onDestroy();

    }

    @Override
    public void onCompleted(String path , int page) {
        Log.e("tag", path);
        checkCatalogInit();
        boolean isHorizontal = getResources().getConfiguration().orientation == Configuration.ORIENTATION_PORTRAIT;
    /*if(page == -1){
        page = 4;
    }*/
        mPDFView.fromFile(new File(path))
                .autoSpacing(true)
                .pageFling(isHorizontal)
                .swipeHorizontal(isHorizontal)
                .onPageChange(onPageChangeListener)
                .defaultPage(page)
                .load();
    }

    @Override
    public void onError() {
        Log.e("tag", "onError");
    }

    private void checkCatalogInit() {
        if (mCatalogView.getAdapter() != null) return;
        mCatalogView.setAdapter(new CatalogAdapter());
    }

    @Override
    public boolean dispatchTouchEvent(MotionEvent ev) {
        if (mDrawerLayout.isDrawerOpen(Gravity.START)) return super.dispatchTouchEvent(ev);
        switch (ev.getAction()) {
            case MotionEvent.ACTION_DOWN:
                pressedPoint = new PointF(ev.getRawX(), ev.getRawY());
                break;
            case MotionEvent.ACTION_UP:
                if (Math.abs(ev.getRawX() - pressedPoint.x) < mScaledTouchSlop && Math.abs(ev.getRawY() - pressedPoint.y) < mScaledTouchSlop) {
                    showReaderMenu();
                    return true;
                }
                if (mConfiguration.orientation == mConfiguration.ORIENTATION_LANDSCAPE) {
                    if(pressedPoint.y - ev.getY() > FLIP_DISTANCE){
                        if(pageCurrent == pageTotal ){
                            boolean result = FileManager.loadNext(PDFReaderActivity.this);
                            if(result) {
                                Toast.makeText(PDFReaderActivity.this, "下一章：" + FileManager.chapterName, Toast.LENGTH_SHORT).show();
                            }
                        }
                    }else if(ev.getY() - pressedPoint.y > FLIP_DISTANCE){
                        if(mPDFView.getCurrentPage() == 0){
                            boolean result = FileManager.loadPrevious(PDFReaderActivity.this);
                            if(result){
                                Toast.makeText(PDFReaderActivity.this, "上一章："+ FileManager.chapterName, Toast.LENGTH_SHORT).show();
                            }
                        }
                    }
                } else if (mConfiguration.orientation == mConfiguration.ORIENTATION_PORTRAIT) {
                    if(pressedPoint.x - ev.getX() > FLIP_DISTANCE) {
                        if(pageCurrent == pageTotal ){
                            boolean result = FileManager.loadNext(PDFReaderActivity.this);
                            if(result){
                                Toast.makeText(PDFReaderActivity.this, "下一章：" + FileManager.chapterName, Toast.LENGTH_SHORT).show();
                            }
                        }
                    }else if(ev.getX() - pressedPoint.x > FLIP_DISTANCE) {
                        if(pageCurrent == 0){
                            boolean result = FileManager.loadPrevious(PDFReaderActivity.this);
                            if(result){
                                Toast.makeText(PDFReaderActivity.this, "上一章："+ FileManager.chapterName, Toast.LENGTH_SHORT).show();
                            }
                        }
                    }
                }
                break;
        }
        return super.dispatchTouchEvent(ev);
    }

    OnPageChangeListener onPageChangeListener = new OnPageChangeListener() {
        @Override
        public void onPageChanged(int page, int pageCount) {
            pageCurrent = page;
            pageTotal = pageCount - 1;
        }
    };

    private void showReaderMenu() {
        setStatusBarVisibility(View.VISIBLE);
        View mRootView = LayoutInflater.from(this).inflate(R.layout.popup_reader_menu, null);
        Toolbar toolbar = mRootView.findViewById(R.id.reader_menu_toolbar);
        toolbar.setNavigationOnClickListener(v -> onBackPressed());
        toolbar.setSubtitle(FileManager.getBookName());
        mRootView.findViewById(R.id.popupEmptyView).setOnClickListener(v -> {
            if (mReaderMenu != null) mReaderMenu.dismiss();
        });
        mRootView.findViewById(R.id.menu_catalog).setOnClickListener(v -> {
            mDrawerLayout.openDrawer(Gravity.START);
            if (mReaderMenu != null) mReaderMenu.dismiss();
        });
        mRootView.findViewById(R.id.menu_collect).setOnClickListener(v -> {
            if (FileManager.isCollected()) {
                Toast.makeText(PDFReaderActivity.this, "您已收藏本书", Toast.LENGTH_LONG).show();
                return;
            }
            HttpClient.collectBookById(id, new SimpleCallback() {
                @Override
                public void onSuccess(int code, String message) {
                    if (code == 200) {
                        FileManager.setCollected();
                        checkCollectStatus((RadioButton) v);
                    }
                    Toast.makeText(PDFReaderActivity.this, message, Toast.LENGTH_LONG).show();
                }
            });
        });
        checkCollectStatus(mRootView.findViewById(R.id.menu_collect));
        mRootView.findViewById(R.id.menu_comment).setOnClickListener(v -> {
            if (mReaderMenu != null) mReaderMenu.dismiss();
            showCommentDialog();
        });
        mReaderMenu = new PopupWindow(this);
        mReaderMenu.setContentView(mRootView);
        mReaderMenu.setWidth(ViewGroup.LayoutParams.MATCH_PARENT);
        mReaderMenu.setHeight(ViewGroup.LayoutParams.MATCH_PARENT);
        mReaderMenu.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        mReaderMenu.setOutsideTouchable(true);
        mReaderMenu.setFocusable(true);
        mReaderMenu.setOnDismissListener(() -> setStatusBarVisibility(View.GONE));
        mReaderMenu.showAtLocation(mPDFView, Gravity.BOTTOM, 0, 0);
    }

    private void checkCollectStatus(RadioButton button) {
        Drawable drawable = getDrawable(FileManager.isCollected() ? R.drawable.ic_star_already : R.drawable.ic_star);
        drawable.setBounds(0, 0, drawable.getIntrinsicWidth(), drawable.getIntrinsicHeight());
        button.setCompoundDrawables(null, drawable, null, null);
    }

    private void showCommentDialog() {
        setStatusBarVisibility(View.VISIBLE);
        View mRootView = LayoutInflater.from(this).inflate(R.layout.popup_reader_comment, null);
        PopupWindow popupWindow = new PopupWindow(this);
        popupWindow.setContentView(mRootView);
        Toolbar toolbar = mRootView.findViewById(R.id.comment_toolbar);
        toolbar.setNavigationOnClickListener(v -> popupWindow.dismiss());
        toolbar.setSubtitle(FileManager.getBookName());
        toolbar.inflateMenu(R.menu.menu);
        toolbar.setOnMenuItemClickListener(item -> {
            RatingBar ratingBar = mRootView.findViewById(R.id.comment_rating);
            EditText editText = mRootView.findViewById(R.id.comment_input);
            if (ratingBar.getNumStars() == 0 || editText.getText().toString().isEmpty()) {
                Toast.makeText(PDFReaderActivity.this, "必须评分与填写内容", Toast.LENGTH_LONG).show();
                return true;
            }
            popupWindow.dismiss();
            HttpClient.commentBookById(id, ratingBar.getNumStars(), editText.getText().toString(), new SimpleCallback() {
                @Override
                public void onSuccess(int code, String message) {
                    Toast.makeText(PDFReaderActivity.this, message, Toast.LENGTH_LONG).show();
                }
            });
            return true;
        });
        popupWindow.setWidth(ViewGroup.LayoutParams.MATCH_PARENT);
        popupWindow.setHeight(ViewGroup.LayoutParams.MATCH_PARENT);
        popupWindow.setBackgroundDrawable(new ColorDrawable(Color.TRANSPARENT));
        popupWindow.setOutsideTouchable(true);
        popupWindow.setFocusable(true);
        popupWindow.setOnDismissListener(() -> setStatusBarVisibility(View.GONE));
        popupWindow.showAtLocation(mPDFView, Gravity.TOP, 0, 0);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        outState.putInt("id", id);
        outState.putString("token", token);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        id = savedInstanceState.getInt("id", 0);
        token = savedInstanceState.getString("token");
        super.onRestoreInstanceState(savedInstanceState);
    }

    private void setStatusBarVisibility(int visibility) {
        if (visibility == View.GONE) {
            WindowManager.LayoutParams lp = getWindow().getAttributes();
            lp.flags |= WindowManager.LayoutParams.FLAG_FULLSCREEN;
            getWindow().setAttributes(lp);
            //getWindow().addFlags(WindowManager.LayoutParams.FLAG_LAYOUT_NO_LIMITS);
        } else {
            WindowManager.LayoutParams attr = getWindow().getAttributes();
            attr.flags &= (~WindowManager.LayoutParams.FLAG_FULLSCREEN);
            getWindow().setAttributes(attr);
        }
    }

    class CatalogAdapter extends BaseAdapter {

        /**
         * How many items are in the data set represented by this Adapter.
         *
         * @return Count of items.
         */
        @Override
        public int getCount() {
            return FileManager.getCatalog().size();
        }

        /**
         * Get the data item associated with the specified position in the data set.
         *
         * @param position Position of the item whose data we want within the adapter's
         *                 data set.
         * @return The data at the specified position.
         */
        @Override
        public Object getItem(int position) {
            return FileManager.getCatalog().get(position);
        }

        /**
         * Get the row id associated with the specified position in the list.
         *
         * @param position The position of the item within the adapter's data set whose row id we want.
         * @return The id of the item at the specified position.
         */
        @Override
        public long getItemId(int position) {
            return 0;
        }

        /**
         * Get a View that displays the data at the specified position in the data set. You can either
         * create a View manually or inflate it from an XML layout file. When the View is inflated, the
         * parent View (GridView, ListView...) will apply default layout parameters unless you use
         * {@link LayoutInflater#inflate(int, ViewGroup, boolean)}
         * to specify a root view and to prevent attachment to the root.
         *
         * @param position    The position of the item within the adapter's data set of the item whose view
         *                    we want.
         * @param convertView The old view to reuse, if possible. Note: You should check that this view
         *                    is non-null and of an appropriate type before using. If it is not possible to convert
         *                    this view to display the correct data, this method can create a new view.
         *                    Heterogeneous lists can specify their number of view types, so that this View is
         *                    always of the right type (see {@link #getViewTypeCount()} and
         *                    {@link #getItemViewType(int)}).
         * @param parent      The parent that this view will eventually be attached to
         * @return A View corresponding to the data at the specified position.
         */
        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            ViewHolder holder;
            if (convertView == null) {
                holder = new ViewHolder();
                convertView = LayoutInflater.from(PDFReaderActivity.this).inflate(android.R.layout.simple_list_item_1, parent, false);
                holder.title = convertView.findViewById(android.R.id.text1);
                convertView.setTag(holder);
            } else {
                holder = (ViewHolder) convertView.getTag();
            }
            DirectoryBean directory = (DirectoryBean) getItem(position);
            holder.title.setText(directory.getTitle());
            return convertView;
        }
    }

    class ViewHolder {
        public TextView title;
    }
}
