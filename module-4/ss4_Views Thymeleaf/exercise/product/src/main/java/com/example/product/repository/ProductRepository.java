package com.example.product.repository;

import com.example.product.model.Product;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class ProductRepository implements IProductRepository{
    private static List<Product> productList;

    static {
        productList = new ArrayList<>();
        productList.add(new Product(1,"bia",12000,"ngon","quang binh"));
        productList.add(new Product(2,"ruou",34000,"rat ngon","quang nam"));
        productList.add(new Product(3,"banh",12000,"sieu ngon","quang ngai"));
        productList.add(new Product(4,"keo",13000,"very ngon","hue"));

    }

    @Override
    public List<Product> getProduct(String freeText) {
        if (freeText == null){
            return productList;
        }
        List<Product> products = new ArrayList<>();
        for (Product product: productList
             ) {
            if (product.getName().contains(freeText)){
                products.add(product);
            }
        }
        return products;

    }

    @Override
    public Product getProductById(int id) {
        for (Product product: productList
             ) {
            if (product.getId() == id){
                return product;
            }
        }
        return null;
    }

    @Override
    public void create(Product product) {
        product.setId(productList.size()+1);
        productList.add(product);
    }

    @Override
    public void update(Product product) {
        for (Product product1: productList
             ) {
            if (product.getId()==product1.getId()){
                product1.setName(product.getName());
                product1.setPrice(product.getPrice());
                product1.setDetail(product.getDetail());
                product1.setProducer(product.getProducer());
            }
        }
    }

    @Override
    public void delete(int id) {
        productList.remove(getProductById(id));
    }
}
