package com.example.demo.controller;

import com.example.demo.model.Clazz;
import com.example.demo.service.IClassService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/classes")
public class ClassController {
    @Autowired
    IClassService iClassService;


    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Clazz> findAllClass(){
        return iClassService.findAll();
    }
}
