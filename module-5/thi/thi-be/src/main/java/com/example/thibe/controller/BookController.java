package com.example.thibe.controller;
import com.example.thibe.model.Book;
import com.example.thibe.service.IBookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin("*")
@RequestMapping("/api/books")
public class BookController {
    @Autowired
    IBookService iBookService;

    @GetMapping("")
    @ResponseStatus(HttpStatus.OK)
    public Iterable<Book> findAllByNameContaining(@RequestParam String name, @PageableDefault(size = 5)Pageable pageable){
        return iBookService.findAll(name, pageable);
    }
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Book findBookById(@PathVariable Integer id){
        return iBookService.findById(id);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public void deleteBook(@PathVariable Integer id){
        iBookService.delete(id);
    }


    @PostMapping("")
    @ResponseStatus(HttpStatus.OK)
    public void saveBook(@RequestBody Book book){
        iBookService.update(book);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public void updateBook(@RequestBody Book book,@PathVariable Integer id){
        Book oldBook = iBookService.findById(id);
        book.setId(id);
        iBookService.update(book);
    }
}
