package com.humbo.humbo2.controller;

import java.util.Optional;

import com.humbo.humbo2.domain.Basket;
import com.humbo.humbo2.domain.Customer;
import com.humbo.humbo2.domain.Product;
import com.humbo.humbo2.domain.ProductOrder;
import com.humbo.humbo2.repository.BasketRepository;
import com.humbo.humbo2.repository.CustomerRepository;
import com.humbo.humbo2.repository.ProductOrderRepository;
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
    private ProductOrderRepository orderRepository;


    public BasketController (CustomerRepository customerRepository, ProductRepository productRepository, BasketRepository basketRepository,
                            ProductOrderRepository orderRepository  ){
        this.customerRepository = customerRepository;
        this.productRepository = productRepository;
        this.basketRepository = basketRepository;
        this.orderRepository = orderRepository;
    }

    @GetMapping("")
    public  ResponseEntity<?> getBasket(){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        return basketRepository.findByCustomer(user).map(basket -> ResponseEntity.ok().body(basket)).orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }
    
    @PostMapping("")
    public ResponseEntity<?> addProduct(@RequestParam Long productId, @RequestParam Integer quantity){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();

        ProductOrder order = new ProductOrder(user, product, product.getSeller(), quantity);

        Optional<Basket> basket = this.basketRepository.findByCustomer(user);
        if(basket.isPresent()){
            order.setBasket(basket.get());
        }else{
            Basket temp = new Basket(user);
            order.setBasket(temp);
        }
        orderRepository.save(order);
        return ResponseEntity.ok().body(null);
    }

    @PutMapping("")
    public ResponseEntity<?> updateProductOrder(@RequestParam Long productId, @RequestParam Integer quantity){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();
        ProductOrder order = this.orderRepository.findForUpdate(user, product);
        order.setQuantity(quantity);
        this.orderRepository.save(order);
        return ResponseEntity.ok().body(String.format("Quantity of %l is updated to %d", productId, quantity));
    }

    @DeleteMapping("")
    public ResponseEntity<?> deleteProductOrder(@RequestParam Long productId){
        Customer user = this.customerRepository.findByEmail(((UserDetails) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getUsername()).get();
        Product product = this.productRepository.findById(productId).get();
        ProductOrder order = this.orderRepository.findForUpdate(user, product);
        this.orderRepository.delete(order);
        return ResponseEntity.ok().body(String.format("%l is deleted", productId));
    }
}
