package com.example.musicvalidation.service;

import com.example.musicvalidation.model.Music;
import com.example.musicvalidation.repository.IMusicRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MusicService implements IMusicService{
    @Autowired
    IMusicRepository iMusicRepository;

    @Override
    public List<Music> findAll() {
        return iMusicRepository.findAll();
    }


    @Override
    public void create(Music music) {
        iMusicRepository.save(music);
    }


}
