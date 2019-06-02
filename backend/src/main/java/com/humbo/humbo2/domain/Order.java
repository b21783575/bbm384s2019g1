package com.humbo.humbo2.domain;

import java.time.Instant;
import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Order{
    @Id 
    @GeneratedValue
    private Long id;
    private String status;
    
    @OneToOne(cascade={CascadeType.REFRESH, CascadeType.DETACH}, fetch=FetchType.EAGER)
    private Customer customer;
    
    @OneToOne(cascade={CascadeType.REFRESH, CascadeType.DETACH}, fetch=FetchType.EAGER)
    private Product product;
    
    private Integer quantity;
    
    @ManyToOne(cascade={CascadeType.REFRESH, CascadeType.DETACH}, fetch=FetchType.EAGER)
    private Seller seller;
    
    private Date date;
    private Boolean isApproved;
    private Boolean isPaid;
    
    public Order(Customer user, Product product, Integer quantity) {
        this.customer = user;
        this.seller = product.getSeller();
        this.product = product;
        this.quantity = quantity;
        this.status = null;
        this.isApproved = false;
        this.isPaid = false;
        this.date = Date.from(Instant.now());
    }
    
}