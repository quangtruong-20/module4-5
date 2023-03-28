package com.example.blog.service;

import com.example.blog.model.Blog;
import com.example.blog.repository.IBlogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class BlogService implements IBlogService{
    @Autowired
    IBlogRepository repository;
    @Override
    public List<Blog> getAll() {
        return repository.findAll();
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

}
