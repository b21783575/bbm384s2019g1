package com.humbo.humbo2.repository;

import com.humbo.humbo2.domain.Customer;
import com.humbo.humbo2.domain.Product;
import com.humbo.humbo2.domain.ProductOrder;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ProductOrderRepository extends JpaRepository<ProductOrder, Long>{

  @Query(value="SELECT * FROM product_order WHERE customer_email=:customer and product_id=:product and is_paid='f'", nativeQuery=true)
	ProductOrder findForUpdate(Customer customer, Product product);
    
  //  Page<ProductOrder> findAll(Pageable pageable);
}