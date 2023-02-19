import { NgModule } from '@angular/core'
import { RouterModule, type Routes } from '@angular/router'
import { CartComponent } from './components/cart/cart/cart.component'
import { ConfirmationComponent } from './components/confirmation/confirmation.component'
import { ProductItemDetailComponent } from './components/product/product-item-detail/product-item-detail.component'
import { ProductListComponent } from './components/product/product-list/product-list.component'

const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  { path: ':id', component: ProductItemDetailComponent },
  { path: 'cart/confirmedOrder', component: ConfirmationComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
