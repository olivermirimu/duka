import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductInterface } from '../product-interface';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: ProductInterface[];
  constructor(private productService: ProductService) {
    this.productService.getProducts().subscribe((products: ProductInterface[]) => {
      this.productList = products;
    }, err => console.log(err));
  }

  fetchProducts() {

  }

  ngOnInit() {

    console.log(this.productList);
  }

}
