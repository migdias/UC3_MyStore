import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { CartComponent } from './components/cart/cart/cart.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
import { ProductListComponent } from './components/product/product-list/product-list.component'
import { ProductItemComponent } from './components/product/product-item/product-item.component'
import { ProductItemDetailComponent } from './components/product/product-item-detail/product-item-detail.component'
import { HeaderComponent } from './layout/header/header.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { CartItemComponent } from './components/cart/cart-item/cart-item.component'

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ConfirmationComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    HeaderComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
