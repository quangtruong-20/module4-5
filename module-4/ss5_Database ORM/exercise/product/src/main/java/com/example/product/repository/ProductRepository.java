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
            session = SessionUtil.sessionFactory.openSession();
            transaction = session.getTransaction();
            transaction.begin();
            session.persist(product);
            transaction.commit();

        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }
    }

    @Override
    public void update(Product product) {
        Session session = null;
        Transaction transaction = null;
        try {
            session = SessionUtil.sessionFactory.openSession();
            transaction = session.getTransaction();
            transaction.begin();
            Product p = getProductById(product.getId());
            p.setName(product.getName());
            p.setProducer(product.getProducer());
            p.setPrice(product.getPrice());
            p.setDetail(product.getDetail());
            session.update(p);
            transaction.commit();

        } catch (Exception e) {
            if (transaction != null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }

    }

    @Override
    public void delete(int id) {
        Session session = null;
        Transaction transaction = null;
        try {
            session = SessionUtil.sessionFactory.openSession();
            transaction = session.getTransaction();
            transaction.begin();
            Product product = getProductById(id);
            session.remove(product);
            transaction.commit();
        } catch (Exception e) {
            if (transaction!= null) {
                transaction.rollback();
            }
        } finally {
            if (session != null) {
                session.close();
            }
        }
    }
}
