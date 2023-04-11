import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsListComponent } from "./products-list/products-list.component";
import {ProductDetailComponent} from "./product-detail/product-detail.component";

const routes: Routes = [
    { path: '', component: ProductsListComponent },
    { path: 'product/:id', component: ProductDetailComponent }
];

@NgModule({
  imports: [
      RouterModule.forRoot(routes)
  ],
  exports: [
      RouterModule
  ]
})

export class AppRoutingModule { }
