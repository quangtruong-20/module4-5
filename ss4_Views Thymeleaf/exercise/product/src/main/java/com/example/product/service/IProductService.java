package com.example.product.service;

import com.example.product.model.Product;

import java.util.List;

public interface IProductService {
    List<Product> getProduct(String freeText);

    Product getProductById(int id);

    void create(Product product);

    void update(Product product);

    void delete(int id);
}
