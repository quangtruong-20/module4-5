package com.example.levunguyen.model;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "User_Role",uniqueConstraints = {
        @UniqueConstraint(name = "USER_ROLE_UK",columnNames = {"User_Id","Role_Id"})
})
public class UserRole {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "Id", nullable = false)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "User_Id", nullable = false)
    private AppUser appUser;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "Role_Id", nullable = false)
    private AppRole appRole;

}
