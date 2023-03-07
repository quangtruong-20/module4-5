package com.example.musicvalidation.controller;

import com.example.musicvalidation.dto.MusicDto;
import com.example.musicvalidation.model.Music;
import com.example.musicvalidation.service.IMusicService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.validation.Valid;

@Controller
@RequestMapping("/musics")
public class MusicController {

    @Autowired
    IMusicService iMusicService;

    @GetMapping("")
    String showAll(Model model) {
        model.addAttribute("music", iMusicService.findAll());
        return "list";
    }

    @GetMapping("/form-create")
    String showFormCreate(Model model) {
        model.addAttribute("musicDto", new MusicDto());
        return "create";
    }

    @PostMapping("create")
    String create(@Valid @ModelAttribute("musicDto") MusicDto musicDto, BindingResult bindingResult, Model model) {
        if (bindingResult.hasErrors()) {
            return "create";
        }
        Music music = new Music();

        BeanUtils.copyProperties(musicDto, music);
        this.iMusicService.create(music);

        return "redirect:/musics";

    }


}
