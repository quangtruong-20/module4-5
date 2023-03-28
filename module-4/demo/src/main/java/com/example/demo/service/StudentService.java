package com.example.demo.service;

import com.example.demo.model.Student;
import com.example.demo.repository.IStudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class StudentService implements IStudentService {
    @Autowired
    IStudentRepository iStudentRepository;

    @Override
    public Page<Student> findAll(String name, Pageable pageable) {
        return iStudentRepository.findStudentByNameContaining(name,pageable);
    }

    @Override
    public Student findById(Integer id) {
        return iStudentRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Student student) {
            iStudentRepository.save(student);
    }

    @Override
    public void delete(Integer id) {
        iStudentRepository.deleteById(id);
    }
}
