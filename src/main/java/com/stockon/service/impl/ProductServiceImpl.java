package com.stockon.service.impl;

import com.stockon.entity.Product;
import com.stockon.repo.ProductRepo;
import com.stockon.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {
    @Autowired
    private ProductRepo productRepo;

    @Override
    public List<Product> getProduct() {
        return productRepo.findAll();
    }

    @Override
    public Product addProduct(Product product) {
        return productRepo.save(product);
    }

    @Override
    public Product deleteProduct(int id) {
        Product product = productRepo.findById(id).get();
        productRepo.delete(product);
        return product;
    }

    @Override
    public Product updateProduct(int id, Product product) {
        Product productVar = productRepo.findById(id).get();
        productVar.setName(product.getName());
        productVar.setPrice(product.getPrice());
        productVar.setQuantity(product.getQuantity());
        productRepo.save(productVar);
        return productVar;
    }

}
