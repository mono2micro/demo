import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CardModule, NavigationModule, ListModule } from 'patternfly-ng';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductService } from './product/product.service';
import { MastheadComponent } from './masthead/masthead.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {CartService} from './cart/cart.service';
import { StorefrontComponent } from './storefront/storefront.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'cart', component: CartComponent},
  {path: '**', component: StorefrontComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MastheadComponent,
    CartComponent,
    StorefrontComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CardModule,
    NavigationModule,
    ListModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
