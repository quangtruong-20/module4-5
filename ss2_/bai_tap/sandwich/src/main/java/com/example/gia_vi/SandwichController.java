package com.example.gia_vi;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.Arrays;

@Controller
public class SandwichController {
    @GetMapping("/list")
    public String showForm(){
        return "form";
    }

    @PostMapping("/list")
    public String result(@RequestParam String[] condiment,Model model){
            model.addAttribute("result", Arrays.toString(condiment));
        return "form";
    }


}
