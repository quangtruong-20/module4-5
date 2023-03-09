package com.example.cart.service;

import com.example.cart.model.Cart;
import com.example.cart.repository.ICartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService implements ICartService {
    @Autowired
    ICartRepository iCartRepository;

    @Override
    public List<Cart> findAll() {
        return iCartRepository.findAll();
    }

    @Override
    public Cart findById(int id) {
        return iCartRepository.findById(id).get();
    }

    @Override
    public void save(Cart cart) {
        iCartRepository.save(cart);
    }
}
