package com.example.calculator.service;

import org.springframework.stereotype.Service;

@Service
public class CalculatorService implements  ICalculatorService{
    @Override
    public double performCaculation(String calculate, double firstNumber, double secondNumber) {
        switch (calculate) {
            case "addition":
                return firstNumber + secondNumber;
            case "subtraction":
                return firstNumber - secondNumber;
            case "multiplication":
                return firstNumber * secondNumber;
            case "division":
                if (secondNumber != 0) {
                    return firstNumber / secondNumber;
                } else {
                    return 0;
                }
        }
        return 0;
    }
}
