package com.example.thibe.repository;

import com.example.thibe.model.BookType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IBookTypeRepository extends JpaRepository<BookType,Integer> {
}
