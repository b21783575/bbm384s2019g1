package com.humbo.humbo2.controller;

import java.util.Optional;

import com.humbo.humbo2.domain.Basket;
import com.humbo.humbo2.domain.Customer;
import com.humbo.humbo2.domain.Order;
import com.humbo.humbo2.domain.Product;
import com.humbo.humbo2.repository.BasketRepository;
import com.humbo.humbo2.repository.CustomerRepository;
import com.humbo.humbo2.repository.OrderRepository;
import com.humbo.humbo2.repository.ProductRepository;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
    
    @PostMapping("")
    public ResponseEntity<?> addProduct(@RequestParam Long productId, @RequestParam Integer quantity){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();

        Order order = new Order(user, product, quantity);

        orderRepository.save(order);
        Optional<Basket> basket = this.basketRepository.findByUser(user);
        if(basket.isPresent()){
            Basket temp = basket.get();
            temp.addOrder(order);
            this.basketRepository.save(temp);
        }else{
            Basket temp = new Basket(user);
            temp.addOrder(order);
            this.basketRepository.save(temp);
        }
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("")
    public ResponseEntity<?> updateOrder(@RequestParam Long productId, @RequestParam Integer quantity){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();
        Order order = this.orderRepository.findForUpdate(user, product);
        order.setQuantity(quantity);
        this.orderRepository.save(order);
        return ResponseEntity.ok().body(String.format("Quantity of %l is updated to %d", productId, quantity));
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteOrder(@RequestParam Long productId){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();
        Order order = this.orderRepository.findForUpdate(user, product);
        Basket basket = this.basketRepository.findByUser(user).get();
        basket.getOrders().remove(order);
        this.basketRepository.save(basket);
        this.orderRepository.delete(order);
        return ResponseEntity.ok().body(String.format("%l is deleted", productId));
    }




}
