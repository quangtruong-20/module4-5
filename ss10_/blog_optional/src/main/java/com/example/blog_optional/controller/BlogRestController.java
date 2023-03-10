package com.example.blog_optional.controller;

import com.example.blog_optional.model.Blog;
import com.example.blog_optional.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/rest/blogs")
public class BlogRestController {
//    Xem danh sách các bài viết
//    Xem chi tiết một bài viết
    @Autowired
    private IBlogService blogService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Page<Blog> getAll(
            @RequestParam(name = "name",required = false,defaultValue = "") String name,
            @PageableDefault(size = 3)Pageable pageable){
        return this.blogService.getAll(name, pageable);

    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{id}")
    public Blog findById(@PathVariable int id){
        return this.blogService.getByID(id);
    }
    @GetMapping("/category/{id}")
    public Page<Blog> getAllByCategory(
            @RequestParam(name = "id",required = false,defaultValue = "") Integer id,
            @PageableDefault(size = 3)Pageable pageable){
        return this.blogService.getBlogByCategory(id, pageable);
    }


}
