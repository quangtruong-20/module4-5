package com.example.levunguyen.model;


import javax.persistence.*;


@Entity
@Table(name = "App_Role",uniqueConstraints = {
        @UniqueConstraint(name = "APP_ROLE_UK",columnNames = "Role_Name")
})
public class AppRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Role_Id",nullable = false)
    private Long roleId;
    @Column(name = "Role_Name",length = 30, nullable = false)
    private String roleName;

    public AppRole() {
    }

    public Long getRoleId() {
        return roleId;
    }

    public void setRoleId(Long roleId) {
        this.roleId = roleId;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }


}
