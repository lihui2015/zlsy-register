package cn.edu.zstu;

import android.app.Application;
import android.util.Log;

import cn.edu.zstu.extend.CloseModule;
import cn.edu.zstu.extend.ImageAdapter;
import cn.edu.zstu.extend.PDFModule;
import cn.edu.zstu.extend.WXEventModule;
import com.alibaba.weex.plugin.loader.WeexPluginContainer;
import cn.edu.zstu.util.AppConfig;
import com.taobao.weex.InitConfig;
import com.taobao.weex.WXSDKEngine;
import com.taobao.weex.common.WXException;

public class WXApplication extends Application {

  @Override
  public void onCreate() {
    super.onCreate();
    WXSDKEngine.addCustomOptions("appName", "WXSample");
    WXSDKEngine.addCustomOptions("appGroup", "WXApp");
    WXSDKEngine.initialize(this,
        new InitConfig.Builder().setImgAdapter(new ImageAdapter()).build()
    );
    try {
      WXSDKEngine.registerModule("event", WXEventModule.class);
      WXSDKEngine.registerModule("PDFModule", PDFModule.class);
      WXSDKEngine.registerModule("close", CloseModule.class);
    } catch (WXException e) {
      Log.i("engine---------", e.toString());
      e.printStackTrace();
    }
    AppConfig.init(this);
    WeexPluginContainer.loadAll(this);
  }
}
