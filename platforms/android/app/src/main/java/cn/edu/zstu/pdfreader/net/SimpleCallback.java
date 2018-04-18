package cn.edu.zstu.pdfreader.net;

import cn.edu.zstu.pdfreader.bean.BaseBean;
import cn.edu.zstu.pdfreader.bean.ResponseBean;
import cn.edu.zstu.pdfreader.bean.ResponseMessageBean;

import retrofit2.Call;
import retrofit2.Response;

public abstract class SimpleCallback implements retrofit2.Callback<ResponseMessageBean> {

    @Override
    public void onResponse(Call<ResponseMessageBean> call, Response<ResponseMessageBean> response) {
        ResponseMessageBean result = response.body();
        if (result == null) onSuccess(-1, "result is null!");
        else onSuccess(result.getCode(), result.getMessage());
    }

    @Override
    public void onFailure(Call<ResponseMessageBean> call, Throwable t) {

    }

    public abstract void onSuccess(int code, String message);

}
