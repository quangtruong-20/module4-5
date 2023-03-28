package com.example.thi.service;

import com.example.thi.model.Song;
import com.example.thi.repository.ISongRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class SongService implements ISongService {
    @Autowired
    ISongRepository iSongRepository;

    @Override
    public Page<Song> findAll(String name, Pageable pageable) {
        return iSongRepository.findAllByNameContaining(name, pageable);
    }

    @Override
    public Song findById(Integer id) {
        return iSongRepository.findById(id).orElse(null);
    }

    @Override
    public void save(Song song) {
            iSongRepository.save(song);
    }

    @Override
    public void delete(Integer id) {
        iSongRepository.deleteById(id);
    }
}
