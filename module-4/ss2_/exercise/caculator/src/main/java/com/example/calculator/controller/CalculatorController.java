package com.example.calculator.controller;

import com.example.calculator.service.ICalculatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class CalculatorController {

    @Autowired
    ICalculatorService calculatorService;

    @GetMapping("/form")
    public String showForm(){
        return "list";
    }

    @PostMapping("/form")
    public String calculation(ModelMap model, @RequestParam double firstNumber , @RequestParam double secondNumber ,@RequestParam String calculate){

        double result = calculatorService.performCalculation(calculate, firstNumber, secondNumber);
        model.addAttribute("result", result);
        return "list";

    }


}
