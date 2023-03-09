package com.example.book.controller;

import com.example.book.model.Book;
import com.example.book.model.Order;
import com.example.book.service.IBookService;
import com.example.book.service.IOrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("/books")
public class BookController {

    @Autowired
    IBookService iBookService;
    @Autowired
    IOrderService iOrderService;

    @GetMapping("")
    String showList(Model model) {
        model.addAttribute("bookList", iBookService.findAll());
        return "list";
    }

    @GetMapping("/{id}")
    String showById(@PathVariable int id, Model model, @ModelAttribute Book book) {
        model.addAttribute("book", iBookService.findById(id));
        return "detail";
    }

    @GetMapping("/order/{id}")
    String order(@PathVariable int id , Model model) {
        // tạo ra order mới
        Order order = new Order();
        // set code cho order
        long code = (long) (Math.random() * (99999 - 100000) + 10000);
        order.setCode(code);
        //set date cho order
        long millis = System.currentTimeMillis();
        order.setDate(new java.sql.Date(millis));

        Book book = iBookService.findById(id);
        book.setQuantity(book.getQuantity() - 1);

        // trong book có list order thì lấy ra list đó
        List<Order> orders = book.getOrderList();
        // add thêm order mới của mình vào
        orders.add(order);
        // thay đổi lại list
        book.setOrderList(orders);

        iBookService.create(book);

        return "redirect:/books";
    }

    @GetMapping("/give-back")
    String showFormBack() {
        return "back";
    }

    @PostMapping("/back")
    String giveBack(@PathVariable int id, Model model) {
        return "back";
    }
}
