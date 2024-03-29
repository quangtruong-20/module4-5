package com.example.levunguyen.model;


import javax.persistence.*;


@Entity
@Table(name = "App_User",uniqueConstraints = {
        @UniqueConstraint(name = "APP_USER_UK",columnNames = "User_Name")
})
public class AppUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "User_Id", nullable = false)
    private Long userId;
    @Column(name = "User_Name", length = 36, nullable = false)
    private String userName;
    @Column(name = "Encryted_Password", length = 128, nullable = false)
    private String encrytedPassword;
    @Column(name = "Enabled", length = 1, nullable = false)
    private Boolean enabled;

    public AppUser() {
    }

    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEncrytedPassword() {
        return encrytedPassword;
    }

    public void setEncrytedPassword(String encrytedPassword) {
        this.encrytedPassword = encrytedPassword;
    }

    public Boolean getEnabled() {
        return enabled;
    }

    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }


}
