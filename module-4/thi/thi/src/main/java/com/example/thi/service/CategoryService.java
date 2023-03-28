package com.example.thi.service;

import com.example.thi.model.Category;
import com.example.thi.repository.ICategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService implements ICategoryService{
    @Autowired
    ICategoryRepository iCategoryRepository;
    @Override
    public Iterable<Category> findAllCategory() {
        return iCategoryRepository.findAll();
    }
}
