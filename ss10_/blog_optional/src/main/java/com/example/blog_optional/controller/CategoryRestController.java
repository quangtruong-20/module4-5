package com.example.blog_optional.controller;

import com.example.blog_optional.model.Category;
import com.example.blog_optional.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/rest/category")
public class CategoryRestController {

//    Xem danh sách các category
//
    @Autowired
    ICategoryService categoryService;


    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    List<Category> findAll(){
        return this.categoryService.getAllCategory();
    };

//    Xem danh sách các bài viết của một category





}
