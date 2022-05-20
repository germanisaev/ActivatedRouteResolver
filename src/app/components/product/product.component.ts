import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  constructor(private actRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.actRoute.snapshot.data['products'];
  }

}
