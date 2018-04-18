package cn.edu.zstu.extend;

import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.common.WXModule;
import cn.edu.zstu.pdfreader.PDFReaderActivity;

/**
 * Created by apple on 2018/4/13.
 */

public class PDFModule extends WXModule{

    @JSMethod(uiThread = true)
    public void readPDF(int id, String token){

        Intent intent = new Intent(mWXSDKInstance.getContext(), PDFReaderActivity.class);

        Bundle bundle = new Bundle();
        intent.putExtra("book_id", id);
        intent.putExtra("token", token);

        mWXSDKInstance.getContext().startActivity(intent);

    }

}
