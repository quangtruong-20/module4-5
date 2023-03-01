package com.example.product.service;

import com.example.product.model.Product;
import com.example.product.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService {

    @Autowired
    IProductRepository productRepository;
    @Override
    public List<Product> getProduct(String freeText) {
        return this.productRepository.getProduct(freeText);
    }

    @Override
    public Product getProductById(int id) {
        return this.productRepository.getProductById(id);
    }

    @Override
    public void create(Product product) {
        this.productRepository.create(product);
    }

    @Override
    public void update(Product product) {
        this.productRepository.update(product);
    }

    @Override
    public void delete(int id) {
        this.productRepository.delete(id);
    }
}
