package com.example.thibe.controller;


import com.example.thibe.model.BookType;
import com.example.thibe.service.IBookTypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/bookTypes")
public class BookTypeController {
    @Autowired
    IBookTypeService iBookTypeService;


    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<BookType> findAllBookType(){
        return iBookTypeService.findAll();
    }
}
