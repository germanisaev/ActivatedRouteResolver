import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable()
export class ProductResolver implements Resolve<any> {
   constructor(public productService: ProductService) { }
   resolve(): Observable<any> {
      return this.productService.getProducts().pipe(
         catchError((error) => {
            return of('No data');
         })
      )
   }
}