import {Component, Input} from '@angular/core';
import {Product} from "../models/product.model";
import {ProductsService} from "../services/products.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styles: []
})

export class ProductCardComponent {
  @Input() myProduct!: Product;

  constructor(private productsService: ProductsService) { }

  onLike(): void {
    this.productsService.onLikeProduct(this.myProduct)
  }

  showPrize(index: number): void{
    this.myProduct.selectedPrice = this.myProduct.price[index];
  }
}
