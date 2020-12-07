package com.gph.mycookery.auth;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id",nullable= false,updatable= false)
    private Long id;
    //   Username with unique constraint
    @Column(name="username",nullable= false,unique = true)
    private String username;
    @Column(name="password",nullable= false)
    private String passwordHash;
    @Column(name="role",nullable= false)
    private String role;
}
