package com.example.may_tinh;

import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculatorController {

    @GetMapping("/form")
    public String showForm(){
        return "list";
    }

    @GetMapping(params = "addition")
    public String additon(ModelMap model, @RequestParam double n1 , @RequestParam double n2){
        double result = n1 + n2;
        model.addAttribute("n1",n1);
        model.addAttribute("n2",n2);
        model.addAttribute("result",result);
        return "list";

    }
    @GetMapping(params = "subtraction")
    public String subtraction(ModelMap model, @RequestParam double n1 , @RequestParam double n2){
        double result = n1 - n2;
        model.addAttribute("n1",n1);
        model.addAttribute("n2",n2);
        model.addAttribute("result",result);
        return "list";

    }
    @GetMapping(params = "multiplication")
    public String multiplication(ModelMap model, @RequestParam double n1 , @RequestParam double n2){
        double result = n1 * n2;
        model.addAttribute("n1",n1);
        model.addAttribute("n2",n2);
        model.addAttribute("result",result);
        return "list";

    }
    @GetMapping(params = "division")
    public String division(ModelMap model, @RequestParam double n1 , @RequestParam double n2){
        double result = n1 / n2;
        model.addAttribute("n1",n1);
        model.addAttribute("n2",n2);
        model.addAttribute("result",result);
        return "list";

    }

}
