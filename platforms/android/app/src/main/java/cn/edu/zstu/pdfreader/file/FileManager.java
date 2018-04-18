package cn.edu.zstu.pdfreader.file;

import android.content.Context;
import android.util.Log;
import android.widget.Toast;

import com.liulishuo.filedownloader.BaseDownloadTask;
import com.liulishuo.filedownloader.FileDownloadSampleListener;
import com.liulishuo.filedownloader.FileDownloader;
import cn.edu.zstu.pdfreader.PDFReaderActivity;
import cn.edu.zstu.pdfreader.bean.DirectoryBean;
import cn.edu.zstu.pdfreader.bean.ResultDirectoryBean;
import cn.edu.zstu.pdfreader.net.Callback;
import cn.edu.zstu.pdfreader.net.HttpClient;

import java.io.BufferedOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.List;

public final class FileManager {

    private static final String ROOT = "pdf";

    private static volatile FileManager instance;
    private String bookName;
    private boolean isCollected;
    private List<DirectoryBean> catalog;
    private String directory;

    static int chapterFlag = 0;
    public static String chapterName = "";

    private FileManager(Context context, int id, String token, final PDFCallback callback) {
        FileDownloader.setup(context);
        directory = context.getFilesDir().getAbsolutePath() + File.separator + ROOT + File.separator + id + File.separator;
        if (!new File(directory).exists()) {
            new File(directory).mkdirs();
        }
        HttpClient.init(token);
        HttpClient.getBookDirectoryById(id, new Callback<ResultDirectoryBean>() {
            @Override
            public void onSuccess(ResultDirectoryBean result) {
                bookName = result.getBookName();
                isCollected = result.getIsCollected() != null && result.getIsCollected().equals("1");
                catalog = result.getDirectory();
                load(0, callback);
            }
        });
    }

    public static void onDestroy(){
        instance = null;
    }

    public static void init(Context context, int id, String token, PDFCallback callback) {
        if (instance == null) {
            synchronized (FileManager.class) {
                if (instance == null) {
                    instance = new FileManager(context, id, token, callback);
                } else {
                    load(0, callback);
                }
            }
        } else {
            load(0, callback);
        }
    }

    public static void load(int chapter, PDFCallback callback) {
        if (chapter < 0 || chapter >= instance.catalog.size()) return;
        chapterFlag = chapter;
        String path = instance.directory + chapter;
        if (new File(path).exists()) {
            callback.onCompleted(path, 0);
        } else {
            instance.download(path, instance.catalog.get(chapter).getFull_pdf(), callback);
        }
    }

    public static boolean loadPrevious(PDFCallback callback){
        if (chapterFlag == 0) return false;
        if(chapterFlag == instance.catalog.size()){
            chapterFlag = chapterFlag - 2;
        }else{
            chapterFlag = chapterFlag - 1;
        }
        chapterName = instance.catalog.get(chapterFlag).getTitle();
        String path = instance.directory + chapterFlag;
        if (new File(path).exists()) {
            callback.onCompleted(path,0);
        } else {
            instance.download(path, instance.catalog.get(chapterFlag).getFull_pdf(), callback);
        }
        return true;
    }

    public static boolean loadNext(PDFCallback callback){
        chapterFlag = chapterFlag + 1;
        if (chapterFlag >= instance.catalog.size()){
            chapterFlag = instance.catalog.size();
            return false;
        }
        chapterName = instance.catalog.get(chapterFlag).getTitle();
        String path = instance.directory + chapterFlag;
        if (new File(path).exists()) {
            callback.onCompleted(path, 0);
        } else {
            instance.download(path, instance.catalog.get(chapterFlag).getFull_pdf(), callback);
        }
        return true;
    }

    public static String getBookName() {
        return instance.bookName;
    }

    public static boolean isCollected() {
        return instance.isCollected;
    }

    public static void setCollected() {
        instance.isCollected = true;
    }

    public static List<DirectoryBean> getCatalog() {
        return instance.catalog;
    }

    private void download(final String path, String url, final PDFCallback callback) {
        FileDownloader.getImpl().create(url).setPath(path).setListener(new FileDownloadSampleListener() {
            @Override
            protected void completed(BaseDownloadTask task) {
                callback.onCompleted(path, 0);
            }

            @Override
            protected void error(BaseDownloadTask task, Throwable e) {
                callback.onError();
            }
        }).start();
    }

    private byte[] fileToBytes(String path) {
        byte[] fileBytes = new byte[0];
        BufferedOutputStream bos;
        try {
            bos = new BufferedOutputStream(new FileOutputStream(new File(path)));
            bos.write(fileBytes);
            bos.flush();
            bos.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return fileBytes;
    }

    public interface PDFCallback {
        void onCompleted(String path, int page);

        void onError();
    }

    public enum LOAD_TYPE {
        INIT,
        NEXT,
        PREVIOUS
    }
}
