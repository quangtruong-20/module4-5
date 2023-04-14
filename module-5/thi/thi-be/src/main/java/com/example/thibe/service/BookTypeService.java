package com.example.thibe.service;


import com.example.thibe.model.BookType;
import com.example.thibe.repository.IBookTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookTypeService implements IBookTypeService {
    @Autowired
    IBookTypeRepository iBookTypeRepository;

    @Override
    public Iterable<BookType> findAll() {
        return iBookTypeRepository.findAll();
    }
}
