package com.example.musicvalidation.service;

import com.example.musicvalidation.model.Music;

import java.util.List;

public interface IMusicService {

    List<Music> findAll();

    void create(Music music);

    Music findById(Integer id);
}
