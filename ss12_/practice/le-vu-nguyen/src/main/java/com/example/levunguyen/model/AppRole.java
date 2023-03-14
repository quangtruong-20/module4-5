package com.example.levunguyen.model;

import lombok.Data;

import javax.persistence.*;

@Data
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

}
