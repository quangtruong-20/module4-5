package com.example.cart.service;

import com.example.cart.model.Cart;

import java.util.List;

public interface ICartService {

    List<Cart> findAll();

    Cart findById(int id);

    void save(Cart cart);



}
