package cn.edu.zstu.pdfreader.net;

import cn.edu.zstu.pdfreader.bean.BaseBean;
import cn.edu.zstu.pdfreader.bean.ResponseBean;

import retrofit2.Call;
import retrofit2.Response;

public abstract class Callback<T extends BaseBean> implements retrofit2.Callback<ResponseBean<T>> {

    @Override
    public void onResponse(Call<ResponseBean<T>> call, Response<ResponseBean<T>> response) {
        ResponseBean<T> result = response.body();
        if (result == null) onFailure(-1, "result is null!");
        else if (result.getCode() == 200) onSuccess(result.getResult());
        else onFailure(result.getCode(), "result code is not 200");
    }

    @Override
    public void onFailure(Call<ResponseBean<T>> call, Throwable t) {

    }

    public abstract void onSuccess(T result);

    public void onFailure(int code, String message) {
    }
}
