package com.example.blog_optional.controller;

import com.example.blog_optional.model.Category;
import com.example.blog_optional.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/categorys")
public class CategoryController {
    @Autowired
    ICategoryService iCategoryService;

    @GetMapping("")
    String getAllCategory(Model model){
        model.addAttribute("category",iCategoryService.getAllCategory());
        return "/category/list";
    }

    @GetMapping("/form-create")
    String showForm(Model model){
        model.addAttribute("category",new Category());
        return "/category/create";
    }
    @PostMapping("create")
    String create(@ModelAttribute Category category){
        iCategoryService.saveCategory(category);
        return "redirect:/categorys";
    }

    @GetMapping("/delete")
    String delete(@RequestParam int deleteId){
        iCategoryService.deleteCategory(deleteId);
        return "redirect:/categorys";

    }

    @GetMapping("/update/{id}")
    String showFormUpdate(@PathVariable int id ,Model model){
  model.addAttribute("category",iCategoryService.getCategoryByID(id));
        return "/category/edit";
    }
@PostMapping("update")
    String update(@ModelAttribute Category category,Model model){
        iCategoryService.saveCategory(category);
        model.addAttribute("category",category);
        return "redirect:/categorys";
}

}
