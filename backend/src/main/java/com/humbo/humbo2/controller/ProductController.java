package com.humbo.humbo2.controller;

import com.humbo.humbo2.domain.Category;
import com.humbo.humbo2.repository.CategoryRepository;
import com.humbo.humbo2.domain.Product;
import com.humbo.humbo2.repository.ProductRepository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
class ProductController {

    private ProductRepository productRepository;
    private CategoryRepository categoryRepository;

    public ProductController(ProductRepository productRepository, CategoryRepository categoryRepository) {
        this.productRepository = productRepository;
        this.categoryRepository = categoryRepository;
    }

    @GetMapping("/products")
    Page<Product> products(Pageable pageable) {
        return productRepository.findAll(pageable);
    }

    @GetMapping("/products/{categoryName}")
    Page<Product> productsOfCategory(@PathVariable String categoryName, Pageable pageable) {
        Iterable<Category> categoryList = this.categoryRepository.findWithChilds(categoryName);
        System.out.println("--------------------------"+categoryList+"-----------------------------");
        return productRepository.findByCategoryIn(categoryList, pageable);
    }

    @GetMapping("/product/{id}")
    ResponseEntity<?> getProduct(@PathVariable Long id) {
        Optional<Product> product = productRepository.findById(id);
        return product.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    @GetMapping("/products/search")
    public Page<Product> search(@RequestParam String searchToken, Pageable pageable){
        return productRepository.search(searchToken, pageable);
    }


}