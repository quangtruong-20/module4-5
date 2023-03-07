package com.example.registerform.service;

import com.example.registerform.model.User;

import java.util.List;

public interface UserService {
    List<User>  getAll();

    void create(User user);


}
