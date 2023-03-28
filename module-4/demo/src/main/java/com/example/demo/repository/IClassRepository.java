package com.example.demo.repository;

import com.example.demo.model.Clazz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IClassRepository extends JpaRepository<Clazz,Integer> {
}
