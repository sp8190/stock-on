package com.stockon.repo;

import com.stockon.entity.Product;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProductRepo extends MongoRepository<Product, Integer> {



}
