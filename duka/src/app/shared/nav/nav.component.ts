import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  searchTerm: string;
  constructor(private productService: ProductService) { }

  search() {
    this.productService.searchProduct(this.searchTerm);
  }

  ngOnInit() {
  }

}
