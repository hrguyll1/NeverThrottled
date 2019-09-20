import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  uri = 'http://localhost:3000/api';
  obs = this.http.get(this.uri);
  
  constructor(private http: HttpClient) {
    this.getProducts();
  }

  //Retrieving all products from the database
  getProducts() {
    return this.http.get(`${this.uri}/products`);
  }

  //Retrieving one single product by _id
  getProductById(id : String) {
    console.log("tryna get by id", id);
    return this.http.get(`${this.uri}/product/${id}`)
  }

  //Add Product
  addProduct(name, description, price, quantity, image) {
    const product = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      image: image
    };
  }
    
  //Update Product
  updateProduct(id, name, description, price, quantity, image) {
    const product = {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      image: image
    };

    return this.http.post(`${this.uri}/product`, product);
  }
}
