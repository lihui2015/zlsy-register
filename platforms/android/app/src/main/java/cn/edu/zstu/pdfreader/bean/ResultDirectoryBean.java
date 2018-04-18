package cn.edu.zstu.pdfreader.bean;

import com.google.gson.annotations.SerializedName;

import java.util.List;

public class ResultDirectoryBean extends BaseBean {

    @SerializedName("book_name")
    private String bookName;
    @SerializedName("is_collected")
    private String isCollected;
    private List<DirectoryBean> directory;

    public List<DirectoryBean> getDirectory() {
        return directory;
    }

    public void setDirectory(List<DirectoryBean> directory) {
        this.directory = directory;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public String getIsCollected() {
        return isCollected;
    }

    public void setIsCollected(String isCollected) {
        this.isCollected = isCollected;
    }
}
