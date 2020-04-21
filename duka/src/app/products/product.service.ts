import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductInterface } from './product-interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductInterface[]> {
    try {
      return this.http.get<ProductInterface[]>('./app/mock-api/products.json');
    } catch (err) {
      console.log(err);
    }
  }

  searchProduct(searchTerm) {
    console.log(searchTerm);
  }
}
