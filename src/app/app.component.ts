import {Component, OnInit} from '@angular/core';
import {Product} from "./models/product.model";
import popData from "./pop-data.json";
import {ProductsService} from "./services/products.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit{
  products!: Product[];
  title = '';
  search = '';

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.search = "";
    this.products = this.productsService.getAllProducts();
    this.title = "first-angular-project";
  }
}
