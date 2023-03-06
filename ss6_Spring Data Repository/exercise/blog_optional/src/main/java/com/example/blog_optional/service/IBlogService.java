package com.example.blog_optional.service;

import com.example.blog_optional.model.Blog;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IBlogService {
    Page<Blog> getAll(Pageable pageable);
   Blog getByID(int id);

   void delete(int id);

   void save(Blog blog);

   Page<Blog> searchBlog(String name , Pageable pageable);

}
