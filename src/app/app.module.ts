import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {registerLocaleData} from "@angular/common";
import localFr from '@angular/common/locales/fr'
registerLocaleData(localFr, 'fr');
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { MatSliderModule } from '@angular/material/slider';
import { Sort, SearchPipe } from './pipes/product.pipe'
import { FormsModule } from "@angular/forms";
import { ProductsListComponent } from './products-list/products-list.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ProductCardComponent,
    Sort,
    SearchPipe,
    HeaderComponent,
    FooterComponent,
    ProductDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSliderModule,
    FormsModule,
  ],
  exports: [
    Sort,
    SearchPipe,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'fr_FR'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
