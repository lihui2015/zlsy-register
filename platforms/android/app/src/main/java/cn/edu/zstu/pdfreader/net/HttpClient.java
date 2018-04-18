package cn.edu.zstu.pdfreader.net;

import cn.edu.zstu.pdfreader.bean.ResultDirectoryBean;

import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Http客户端
 */
public class HttpClient {

    private static volatile HttpClient instance;
    private String token;
    private Api api;

    private HttpClient() {
        Retrofit retrofit = new Retrofit.Builder().baseUrl(Api.HOST).addConverterFactory(GsonConverterFactory.create()).build();
        api = retrofit.create(Api.class);
    }

    /**
     * 初始化
     */
    public static void init(String token) {
        if (instance == null) {
            synchronized (HttpClient.class) {
                if (instance == null) {
                    instance = new HttpClient();
                    instance.token = token;
                }
            }
        }
    }

    public static void getBookDirectoryById(int id, Callback<ResultDirectoryBean> callback) {
        instance.api.getBookDirectoryById(id, instance.token).enqueue(callback);
    }

    public static void collectBookById(int id, SimpleCallback callback) {
        instance.api.collectBookById(id, instance.token).enqueue(callback);
    }

    public static void commentBookById(int id, int score, String comment, SimpleCallback callback) {
        instance.api.commentBookById(id, score, comment, instance.token).enqueue(callback);
    }

}
