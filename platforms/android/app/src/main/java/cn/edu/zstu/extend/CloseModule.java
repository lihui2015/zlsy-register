package cn.edu.zstu.extend;

import android.content.Intent;
import android.content.res.Resources;
import android.os.Bundle;
import android.util.Log;

import com.taobao.weex.annotation.JSMethod;
import com.taobao.weex.bridge.JSCallback;
import com.taobao.weex.common.WXModule;
import com.taobao.weex.devtools.common.LogUtil;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import cn.edu.zstu.WXPageActivity;
import cn.edu.zstu.util.CacheActivity;
import cn.edu.zstu.util.APKVersionCodeUtils;

import static com.taobao.weex.ui.ExternalLoaderComponentHolder.TAG;

/**
 * Created by apple on 2018/4/13.
 */

public class CloseModule extends WXModule{

    @JSMethod(uiThread = false)
    public void closeApp() {
        LogUtil.e("触发关闭效果");
        CacheActivity.finishActivity();
    }

    @JSMethod(uiThread = false)
    public void getPhoneAppBar(JSCallback callback) {

        boolean hasNavigationBar = false;
        Resources rs = mWXSDKInstance.getContext().getResources();
        int id = rs.getIdentifier("config_showNavigationBar", "bool", "android");
        if (id > 0) {
            hasNavigationBar = rs.getBoolean(id);
        }
        try {
            Class systemPropertiesClass = Class.forName("android.os.SystemProperties");
            Method m = systemPropertiesClass.getMethod("get", String.class);
            String navBarOverride = (String) m.invoke(systemPropertiesClass, "qemu.hw.mainkeys");
            if ("1".equals(navBarOverride)) {
                hasNavigationBar = false;
            } else if ("0".equals(navBarOverride)) {
                hasNavigationBar =true;
            }
        } catch (Exception e) {

        }

        Map<String, Object> map = new HashMap<>();
        map.put("bar", hasNavigationBar);
        callback.invokeAndKeepAlive(map);

        LogUtil.e("获取是否存在虚拟按键" + hasNavigationBar);

    }




}
