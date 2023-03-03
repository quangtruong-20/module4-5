package com.example.blog.controller;

import com.example.blog.model.Blog;
import com.example.blog.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/blogs")
public class BlogController {
    @Autowired
    IBlogService service;

    @GetMapping("")
    public String showList(Model model){
        model.addAttribute("blog",service.getAll());
        return "/list";
    }

    @GetMapping("/form-create")
    public String getCreateForm(Model model){
        model.addAttribute("blog",new Blog());
        return "/create";
    }
    @PostMapping("/create")
    public String create(@ModelAttribute Blog blog){
        service.save(blog);
        return "redirect:/blogs";
    }


    @GetMapping("{id}")
    public String getBlog(@PathVariable int id,Model model){
        model.addAttribute("blog",service.getByID(id));
        return "/detail";
    }

    @GetMapping("/delete")
    public String delete(@PathVariable int deleteId){
        service.delete(deleteId);
        return "redirect:/blogs";
    }

//    @GetMapping("/update/{id}")
//    public String getUpdateForm(@PathVariable int id,Model model){
//        model.addAttribute("product",productService.getProductById(id));
//        return "/update";
//    }
//
//    @PostMapping("update")
//    public String getUpdate(@ModelAttribute Blog product,Model model){
//        productService.update(product);
//        model.addAttribute("product", product);
//        return "redirect:/product";
//    }
}
