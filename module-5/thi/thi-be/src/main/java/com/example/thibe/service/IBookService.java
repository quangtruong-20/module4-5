package com.example.thibe.service;


import com.example.thibe.model.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface IBookService {
    Page<Book> findAll(String name , Pageable pageable);

    Book findById(Integer id);

    void update(Book book);

    void delete(Integer id);


}
