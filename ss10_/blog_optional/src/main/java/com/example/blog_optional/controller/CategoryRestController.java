package com.example.blog_optional.controller;

import com.example.blog_optional.model.Blog;
import com.example.blog_optional.model.Category;
import com.example.blog_optional.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

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

    @GetMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Set<Blog> getByid(@PathVariable int id){
        Category category =this.categoryService.getCategoryByID(id);
        return category.getBlogs();
    }



}
