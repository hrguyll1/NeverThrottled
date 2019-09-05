import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductService } from '../../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-store',
  templateUrl: './product-store.component.html',
  styleUrls: ['./product-store.component.css']
})
export class ProductStoreComponent implements OnInit {
  productList$;
  data;

  constructor(private productService: ProductService) { }

  fetchProducts(): Observable<Object> {
    return this.productService
    .getProducts()

  }


  ngOnInit() {

  }

}
