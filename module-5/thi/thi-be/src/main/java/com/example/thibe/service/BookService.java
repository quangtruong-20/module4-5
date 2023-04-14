package com.example.thibe.service;


import com.example.thibe.model.Book;
import com.example.thibe.repository.IBookRepository;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class BookService implements IBookService {
    @Autowired
    IBookRepository iBookRepository;

    @Override
    public Page<Book> findAll(String name, Pageable pageable) {
        return iBookRepository.findBookByNameContaining(name,pageable);
    }

    @Override
    public Book findById(Integer id) {
        return iBookRepository.findById(id).orElse(null);
    }

    @Override
    public void update(Book book) {
        iBookRepository.save(book);
    }

    @Override
    public void delete(Integer id) {
        iBookRepository.deleteById(id);
    }
}
