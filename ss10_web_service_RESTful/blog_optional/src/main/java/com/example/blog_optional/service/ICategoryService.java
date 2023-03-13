package com.example.blog_optional.service;

import com.example.blog_optional.model.Category;

import java.util.List;

public interface ICategoryService {
    List<Category> getAllCategory();
    Category getCategoryByID(int id);

}
