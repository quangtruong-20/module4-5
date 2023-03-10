package com.example.blog_optional.controller;

import com.example.blog_optional.model.Blog;
import com.example.blog_optional.model.Category;
import com.example.blog_optional.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("/rest/category")
public class CategoryRestController {
    @Autowired
    ICategoryService categoryService;

//    Xem danh sách các category
    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    List<Category> findAll(){
        return this.categoryService.getAllCategory();
    };

//    Xem danh sách các bài viết của một category
    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    Set<Blog> findById(@PathVariable int id){
        Category category = categoryService.getCategoryByID(id);
        return category.getBlogs();
    }
}
