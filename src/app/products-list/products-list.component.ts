import {Component, OnInit} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styles: []
})

export class ProductsListComponent implements OnInit{
  products!: Product[];
  search = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
  }
}
