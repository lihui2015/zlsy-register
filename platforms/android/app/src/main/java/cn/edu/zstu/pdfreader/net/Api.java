package cn.edu.zstu.pdfreader.net;

import cn.edu.zstu.pdfreader.bean.ResponseBean;
import cn.edu.zstu.pdfreader.bean.ResponseMessageBean;
import cn.edu.zstu.pdfreader.bean.ResultDirectoryBean;

import retrofit2.Call;
import retrofit2.http.Field;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.Header;
import retrofit2.http.POST;
import retrofit2.http.Path;

public interface Api {

    String HOST = "http://zl.senseitgroup.com/";

    @GET("app/book_directory/{id}")
    Call<ResponseBean<ResultDirectoryBean>> getBookDirectoryById(@Path("id") int id, @Header("access-token") String token);

    @POST("app/books/collect/{id}")
    Call<ResponseMessageBean> collectBookById(@Path("id") int id, @Header("access-token") String token);

    @FormUrlEncoded
    @POST("app/books/comment/{id}")
    Call<ResponseMessageBean> commentBookById(@Path("id") int id, @Field("score") int score, @Field("content") String content, @Header("access-token") String token);


}
