package com.example.blog_optional.service.impl;

import com.example.blog_optional.model.Blog;
import com.example.blog_optional.repository.IBlogRepository;
import com.example.blog_optional.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlogService implements IBlogService {
    @Autowired
    IBlogRepository repository;

    @Override
    public Page<Blog> getAll(String name,Pageable pageable) {
        return repository.findBlogByNameContaining(name,pageable);
    }

    @Override
    public Blog getByID(int id) {
        return repository.findById(id).orElse(null);
    }

    @Override
    public void delete(int id) {
            repository.deleteById(id);
    }

    @Override
    public void save(Blog blog) {
        repository.save(blog);
    }

    @Override
    public Page<Blog> getBlogByCategory(Integer id, Pageable pageable) {
        return repository.findBlogByCategory_Id(id,pageable);
    }

//    @Override
//    public Page<Blog> searchBlog(String name, Pageable pageable) {
//        return repository.searchNameFreeStyle(name,pageable);
//    }

}
