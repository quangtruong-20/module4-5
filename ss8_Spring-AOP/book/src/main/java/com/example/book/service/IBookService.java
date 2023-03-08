package com.example.book.service;

import com.example.book.model.Book;

import java.util.List;

public interface IBookService {
    List<Book> findAll();

    void create(Book book);

    Book findById(int id);


}
