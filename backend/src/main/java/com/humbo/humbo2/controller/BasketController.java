package com.humbo.humbo2.controller;

import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.Instant;
import java.util.Date;
import java.util.Optional;

import com.humbo.humbo2.domain.Basket;
import com.humbo.humbo2.domain.Customer;
import com.humbo.humbo2.domain.Order;
import com.humbo.humbo2.domain.Product;
import com.humbo.humbo2.repository.BasketRepository;
import com.humbo.humbo2.repository.CustomerRepository;
import com.humbo.humbo2.repository.OrderRepository;
import com.humbo.humbo2.repository.ProductRepository;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.validation.annotation.Validated;
import org.springframework.security.core.context.SecurityContextHolder;

@RestController
@RequestMapping("/api/basket")
public class BasketController {

    private CustomerRepository customerRepository;
    private ProductRepository productRepository;
    private BasketRepository basketRepository;
    private OrderRepository orderRepository;


    public BasketController (CustomerRepository customerRepository, ProductRepository productRepository, BasketRepository basketRepository,
                            OrderRepository orderRepository  ){
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.basketRepository = basketRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping("")
    public  ResponseEntity<?> getBasket(){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        return basketRepository.findByUser(user).map(basket -> ResponseEntity.ok().body(basket)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @PostMapping("/add")
    public ResponseEntity<?> addProduct(@RequestParam Long productId, @RequestParam Integer quantity){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();
        Order order = new Order(null, null, user, product, quantity, product.getSeller(), Date.from(Instant.now()), false, false );
        orderRepository.save(order);
    
        return basketRepository.findByUser(user).map((basket) -> {basket.addOrder(order); basketRepository.save(basket);}).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }



}
