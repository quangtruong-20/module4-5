package com.example.blog.controller;

import com.example.blog.service.IBlogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/blog")
public class BlogController {
    @Autowired
    IBlogService service;

    @GetMapping("")
    public String showList(Model model){
        model.addAttribute("blog",service.getAll());
        return "/list";
    }
}
