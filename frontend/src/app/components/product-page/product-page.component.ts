import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ProductService } from '../../product.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  id : String;
  product : Product;

  constructor(private router : Router, private route : ActivatedRoute, private productService : ProductService) {

  }

  fetchProduct(id : String) {
    var data: {status?: string; data?: []};
    this.productService
      .getProductById(this.id)
      .subscribe((data : any) => {
        if(data.data)
          this.product = data.data;
        else
          this.product = null;
      });
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.fetchProduct(this.id);
  }

}
