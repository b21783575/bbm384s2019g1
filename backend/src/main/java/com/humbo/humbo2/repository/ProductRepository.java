package com.humbo.humbo2.repository;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.access.prepost.PreAuthorize;

import com.humbo.humbo2.domain.Product;
import com.humbo.humbo2.domain.Seller;
import com.humbo.humbo2.domain.Category;

// @PreAuthorize("hasRole('SELLER')")
public interface ProductRepository extends JpaRepository<Product, Long>{
	@Override
	@PreAuthorize("#product?.seller == null or #product?.seller?.email == authentication?.name")
	Product save(@Param("product") Product product);

	@Override
	@PreAuthorize("@productRepository.findById(#id)?.seller?.email == authentication?.name")
	void deleteById(@Param("id") Long id);

	@Override
	@PreAuthorize("#product?.seller?.email == authentication?.name")
	void delete(@Param("product") Product product);

	Iterable<Product> findByCategory(Category category);
	@Query(
            value = "SELECT DISTINCT * FROM product WHERE name ILIKE %:searchToken% or brand ILIKE %:searchToken%" ,
			nativeQuery = true
	)
	
	Page<Product> search(@Param("searchToken") String searchToken, Pageable pageable) ;

	Page<Product> findByCategoryIn(Iterable<Category> categoryList, Pageable pageable);

	Page<Product> findAllBySeller(Seller seller, Pageable pageable);

}