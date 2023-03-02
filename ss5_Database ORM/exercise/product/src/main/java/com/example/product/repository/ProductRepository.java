package com.example.product.repository;

import com.example.product.model.Product;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class ProductRepository implements IProductRepository{

    @Override
    public List<Product> getProduct(String freeText) {
        Session session = null;
        List<Product> productList = null;
        try {
            session = SessionUtil.sessionFactory.openSession();
                    productList = session.createQuery("from Product where name like concat('%', ?1, '%')").
             setParameter(1,freeText).getResultList();
        }catch (Exception e){
            e.printStackTrace();
        }finally {
            if (session != null){
                session.close();
            }
        }
        return productList;
    }

    @Override
    public Product getProductById(int id) {

        return SessionUtil.entityManager.find(Product.class,id);
    }

    @Override
    public void create(Product product) {
        Session session = null;
        Transaction transaction = null;
        try {
            session =SessionUtil.sessionFactory.openSession();
            transaction = session.beginTransaction();
            Product origin = getProductById(product.getId());
            origin.setName(product.getName());
            origin.setProducer(product.getProducer());
            origin.setDetail(product.getDetail());
            origin.setPrice(product.getPrice());
            session.saveOrUpdate(origin);
            transaction.commit();
            return origin;
        }catch (Exception e) {
            e.printStackTrace();
            if (transaction != null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }
        return null;
    }

    @Override
    public void update(Product product) {
//        for (Product product1: productList
//             ) {
//            if (product.getId()==product1.getId()){
//                product1.setName(product.getName());
//                product1.setPrice(product.getPrice());
//                product1.setDetail(product.getDetail());
//                product1.setProducer(product.getProducer());
//            }
//        }
    }

    @Override
    public void delete(int id) {
//        productList.remove(getProductById(id));
    }
}
