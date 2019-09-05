import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductStoreComponent } from './product-store/product-store.component';
import { ProductService } from '../product.service';

@NgModule({
  declarations: [ProductStoreComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductStoreComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule { }
