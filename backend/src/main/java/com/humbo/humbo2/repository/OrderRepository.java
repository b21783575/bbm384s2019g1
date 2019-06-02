package com.humbo.humbo2.repository;

import com.humbo.humbo2.domain.Customer;
import com.humbo.humbo2.domain.Order;
import com.humbo.humbo2.domain.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OrderRepository extends JpaRepository<Order, Long>{

  @Query(value="SELECT * FROM order WHERE user=:user and product=:product and isPaid=false")
	Order findForUpdate(Customer user, Product product);
    
  //  Page<Order> findAll(Pageable pageable);
}