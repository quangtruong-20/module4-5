package com.example.thi.service;

import com.example.thi.model.Song;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ISongService {
    Page<Song> findAll(String name, Pageable pageable);

    Song findById(Integer id);

    void save(Song song);

    void delete(Integer id);

}
