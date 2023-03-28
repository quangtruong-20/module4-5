package com.example.product.controller;

import com.example.product.model.Product;
import com.example.product.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/product")
public class ProductController {
    @Autowired
    IProductService productService;

    @GetMapping("")
    public String showList(@RequestParam(required = false, defaultValue = "") String freeText,Model model) {
        model.addAttribute("productList", this.productService.getProduct(freeText));
        return "/list";
    }

    @GetMapping("{id}")
    public String getProduct(@PathVariable int id,Model model) {
        model.addAttribute("product", this.productService.getProductById(id));
        return "/detail";
    }

    @GetMapping("creation-form")
    public String getCreationForm(Model model) {
        model.addAttribute("product", new Product());
        return "/create";
    }

    @PostMapping("/create")
    public String createProduct(@ModelAttribute Product product, Model model) {
        this.productService.create(product);
        return "redirect:/product";
    }
    @GetMapping("/delete")
    public String deleteProduct(@RequestParam  int deleteId) {
        this.productService.delete(deleteId);
        return "redirect:/product";

    }
    @GetMapping("/update/{id}")
    public String getUpdateForm(@PathVariable int id,Model model){
        model.addAttribute("product",productService.getProductById(id));
        return "/update";
    }

    @PostMapping("update")
    public String getUpdate(@ModelAttribute Product product,Model model){
        productService.update(product);
        model.addAttribute("product", product);
        return "redirect:/product";
    }
}
