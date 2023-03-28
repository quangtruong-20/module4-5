package com.example.demo.service;

import com.example.demo.model.Clazz;
import com.example.demo.repository.IClassRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClassService implements IClassService{
    @Autowired
    IClassRepository iClassRepository;

    @Override
    public Iterable<Clazz> findAll() {
        return iClassRepository.findAll();
    }
}
