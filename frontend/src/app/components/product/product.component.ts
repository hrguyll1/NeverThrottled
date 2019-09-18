import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTable } from '@angular/material';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: Product[];
  displayedColumns = ['name', 'price', 'image'];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.fetchProducts();
  }

  fetchProducts() {
    var data: {status?: string; data?: []};
    this.productService
      .getProducts()
      .subscribe((data : any) => {
        this.products = data.data;
      });
  }

}
