package com.example.mailbox.controller;

import com.example.mailbox.model.Mail;
import com.example.mailbox.service.IMailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.Arrays;

@Controller

public class MailController {
    @Autowired
    IMailService mailService;

    @GetMapping("/form")
    public String formUpdate(Model model) {
        model.addAttribute("mail", mailService.getMailInfor());
        model.addAttribute("languages", Arrays.asList("English", "Vietnamese", "Japanese", "Chinese"));
        model.addAttribute("pageSize", Arrays.asList("5", "10", "15", "20", "25"));
        return "mail";
    }

    @PostMapping("/form")
    public String Update(@ModelAttribute Mail mail, Model model){
        mailService.updateMail(mail);
        model.addAttribute("mail",mail);
        return "info";
    }


}
