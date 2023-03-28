package com.example.demo.controller;

import com.example.demo.model.Student;
import com.example.demo.service.IStudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("api/students")
public class StudentController {
    @Autowired
    IStudentService iStudentService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Student> findAllByNameContaining(@RequestParam String name, @PageableDefault(size = 5)Pageable pageable){
        return iStudentService.findAll(name, pageable);
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Student findStudentById(@PathVariable Integer id){
        return iStudentService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteStudent(@PathVariable Integer id){
        iStudentService.delete(id);
    }


    @PostMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void saveStudent(@RequestBody Student student){
        iStudentService.update(student);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateStudent(@RequestBody Student student,@PathVariable Integer id){
        Student oldStudent = iStudentService.findById(id);
        student.setId(id);
        iStudentService.update(student);
    }
}
