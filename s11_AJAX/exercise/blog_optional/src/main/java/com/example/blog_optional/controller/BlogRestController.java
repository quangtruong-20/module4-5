package com.example.blog_optional.controller;

import com.example.blog_optional.model.Blog;
import com.example.blog_optional.model.Category;
import com.example.blog_optional.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/rest/blogs")
public class BlogRestController {
//    Xem danh sách các bài viết
    @Autowired
    private IBlogService blogService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<Blog> getAll(
            @RequestParam(name = "name",required = false,defaultValue = "") String name,
            @PageableDefault(size = 3)Pageable pageable){
        return this.blogService.getAll(name, pageable);

    }
//    @GetMapping("")
//    @ResponseStatus(HttpStatus.OK)
//    List<Blog> findAll() {
//        return this.blogService.findAll();
//    }
//    Xem chi tiết một bài viết
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Blog findById(@PathVariable int id){
        return this.blogService.getByID(id);
    }



}
