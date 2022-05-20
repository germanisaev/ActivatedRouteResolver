import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  url = 'https://fakestoreapi.com/products?limit=6';
  constructor(public http: HttpClient) { }
  getProducts() {
     return this.http.get(this.url);
  }
}