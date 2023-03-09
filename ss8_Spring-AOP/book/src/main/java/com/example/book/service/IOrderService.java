package com.example.book.service;

import com.example.book.model.Order;

import java.util.List;

public interface IOrderService {
    List<Order> findAll();

    void create(Order order);

    Order findById(int id);

    Order findByCode(Long code);
}
