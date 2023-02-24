package com.example.currencyconversion;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class ConversionController {
    @GetMapping("/form")
    public String convert(@RequestParam(required = false) Double usdAmount, Model model){
        // để hiện list
        if (usdAmount==null){
            return "list";
        }

        double result = usdAmount * 24000;
        model.addAttribute("usdAmount",usdAmount);
        model.addAttribute("result",result);
        return "list";
    }
}

