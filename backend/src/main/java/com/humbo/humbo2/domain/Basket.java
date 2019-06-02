package com.humbo.humbo2.domain;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Basket{

    @Id @GeneratedValue
    private Long id;
    @OneToOne(cascade={CascadeType.REFRESH, CascadeType.DETACH}, fetch=FetchType.EAGER)
    private Customer user;

    @OneToMany(cascade={CascadeType.REFRESH, CascadeType.DETACH}, fetch=FetchType.EAGER)
    private Set<Order> orders;

    public void addOrder(Order order){
        orders.add(order);
    }

	public Basket(Customer user) {
        this.user = user;
        orders = new HashSet<>();
	}
}