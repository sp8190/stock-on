package com.stockon.service;

import com.stockon.entity.Product;

import java.util.List;

public interface ProductService {

    public List<Product> getProduct();

    public Product addProduct(Product product);

    public Product deleteProduct(int id);

    public Product updateProduct(int id, Product product);

}
