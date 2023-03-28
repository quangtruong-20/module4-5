package com.example.thi.repository;

import com.example.thi.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import javax.persistence.criteria.CriteriaBuilder;

@Repository
public interface ISongRepository extends JpaRepository<Song,Integer> {
    Page<Song> findAllByNameContaining(String name, Pageable pageable);

}
