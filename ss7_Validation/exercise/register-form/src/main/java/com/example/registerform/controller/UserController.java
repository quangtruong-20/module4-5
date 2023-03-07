package com.example.registerform.controller;

import com.example.registerform.dto.UserDTO;
import com.example.registerform.model.User;
import com.example.registerform.service.UserService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.validation.Valid;

@Controller
@RequestMapping("/users")
public class UserController {
    @Autowired
    UserService userService;
    @GetMapping("")
    String showList(Model model){
        model.addAttribute("userList",userService.getAll());
        return "list";
    }

    @GetMapping("/form-create")
    String showForm(Model model){
        model.addAttribute("userDTO",new UserDTO());
        return "create";
    }

    @PostMapping("/create")
    String create(@Valid @ModelAttribute("userDTO") UserDTO userDTO, BindingResult bindingResult, RedirectAttributes redirectAttributes){

        if (bindingResult.hasErrors()){
            return "create";
        }
        User user = new User();
        BeanUtils.copyProperties(userDTO,user);
        this.userService.create(user);

        return "redirect:/users";
    }


}
