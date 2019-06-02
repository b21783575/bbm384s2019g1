package com.humbo.humbo2.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.RequestEntity;

import java.util.Optional;

import com.humbo.humbo2.domain.Basket;
import com.humbo.humbo2.domain.Customer;

public interface BasketRepository extends JpaRepository<Basket, Long>{

	Optional<Basket> findByUser(Customer user);

}