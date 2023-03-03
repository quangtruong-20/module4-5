package com.example.blog.service;

import com.example.blog.model.Blog;

import java.util.List;

public interface IBlogService {
    List<Blog> getAll();
   Blog getByID(int id);

   void delete(int id);

   void save(Blog blog);


}
