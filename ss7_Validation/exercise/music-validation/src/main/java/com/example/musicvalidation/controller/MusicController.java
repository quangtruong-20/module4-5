package com.example.musicvalidation.controller;

import com.example.musicvalidation.service.IMusicService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("/musics")
public class MusicController {

    @Autowired
    IMusicService iMusicService;

    @GetMapping("")
    String showAll(Model model){
        model.addAttribute("music",iMusicService.findAll());
        return "list";
    }

}
