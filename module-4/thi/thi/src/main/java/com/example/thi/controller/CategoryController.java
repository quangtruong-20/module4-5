package com.example.thi.controller;

import com.example.thi.model.Category;
import com.example.thi.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/categorys")
public class CategoryController {

    @Autowired
    ICategoryService iCategoryService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Iterable<Category> findAllCategory(){
        return iCategoryService.findAllCategory();
    }


}
