import {Component, OnInit} from '@angular/core';
import {ProductsService} from "../services/products.service";
import {Product} from "../models/product.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-product-detail',
    templateUrl: './product-detail.component.html',
    styles: []
})

export class ProductDetailComponent implements OnInit {
    myProduct!: Product;
    id: number = 1;

    constructor(
        private productService: ProductsService,
        private route: ActivatedRoute,
    ) {
        this.route.params.subscribe(params => {
            this.id = parseInt(params['id']);
        });
    }

    ngOnInit() {
        let res = this.productService.getOneProducts(this.id);
        if (res) {
            this.myProduct = res
        }
    }

    onLike() {
        this.productService.onLikeProduct(this.myProduct);
    }
}
