package cn.edu.zstu.pdfreader.bean;

public class DirectoryBean {

    /**
     * id : 1
     * book_id : 1
     * section_id : 0
     * prefix :
     * title : 引言
     * description :
     * start : 1
     * end : 8
     * admin_id : 1
     * created_at : 2018-04-12 16:17:00
     * updated_at : 2018-04-13 15:35:47
     * pdf_url : storage/aetherupload/file/201804/318034335c81fdaea2038d82954371d2.pdf
     * full_pdf : http://zl.senseitgroup.com/storage/aetherupload/file/201804/318034335c81fdaea2038d82954371d2.pdf
     */

    private int id;
    private int book_id;
    private int section_id;
    private String prefix;
    private String title;
    private String description;
    private int start;
    private int end;
    private int admin_id;
    private String created_at;
    private String updated_at;
    private String pdf_url;
    private String full_pdf;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getBook_id() {
        return book_id;
    }

    public void setBook_id(int book_id) {
        this.book_id = book_id;
    }

    public int getSection_id() {
        return section_id;
    }

    public void setSection_id(int section_id) {
        this.section_id = section_id;
    }

    public String getPrefix() {
        return prefix;
    }

    public void setPrefix(String prefix) {
        this.prefix = prefix;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getStart() {
        return start;
    }

    public void setStart(int start) {
        this.start = start;
    }

    public int getEnd() {
        return end;
    }

    public void setEnd(int end) {
        this.end = end;
    }

    public int getAdmin_id() {
        return admin_id;
    }

    public void setAdmin_id(int admin_id) {
        this.admin_id = admin_id;
    }

    public String getCreated_at() {
        return created_at;
    }

    public void setCreated_at(String created_at) {
        this.created_at = created_at;
    }

    public String getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(String updated_at) {
        this.updated_at = updated_at;
    }

    public String getPdf_url() {
        return pdf_url;
    }

    public void setPdf_url(String pdf_url) {
        this.pdf_url = pdf_url;
    }

    public String getFull_pdf() {
        return full_pdf;
    }

    public void setFull_pdf(String full_pdf) {
        this.full_pdf = full_pdf;
    }
}
