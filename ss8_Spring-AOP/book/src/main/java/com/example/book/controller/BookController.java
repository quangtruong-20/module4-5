package com.example.book.controller;

import com.example.book.model.Book;
import com.example.book.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/books")
public class BookController {

    @Autowired
    IBookService iBookService;

    @GetMapping("")
    String showList(Model model){
        model.addAttribute("bookList",iBookService.findAll());
        return "list";
    }
    @GetMapping("/{id}")
    String showById(@PathVariable int id , Model model , @ModelAttribute Book book){
        model.addAttribute("book",iBookService.findById(id));
        return "detail";
    }
    @GetMapping("/give-back")
    String showFormBack(){
        return "back";
    }
    @PostMapping("/back")
    String giveBack(@PathVariable int id,Model model){
        return "back";
    }
}
