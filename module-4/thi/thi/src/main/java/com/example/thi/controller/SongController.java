package com.example.thi.controller;

import com.example.thi.model.Song;
import com.example.thi.service.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/songs")
public class SongController {
    @Autowired
    ISongService iSongService;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public Iterable<Song> findAllByNameContaining(@RequestParam String name  , @PageableDefault(size = 3)Pageable pageable){
        return iSongService.findAll(name, pageable);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}")
    public Song findSongById(@PathVariable Integer id){
        return iSongService.findById(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("{id}")
    public void deleteSong(@PathVariable Integer id){
                iSongService.delete(id);
    }

    @ResponseStatus(HttpStatus.OK)
    @PostMapping("")
    public void saveSong(@RequestBody Song song){
        iSongService.save(song);
    }

}
