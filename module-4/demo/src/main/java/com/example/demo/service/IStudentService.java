package com.example.demo.service;

import com.example.demo.model.Student;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IStudentService {
    Page<Student> findAll(String name , Pageable pageable);

    Student findById(Integer id);

    void update(Student student);

    void delete(Integer id);


}
