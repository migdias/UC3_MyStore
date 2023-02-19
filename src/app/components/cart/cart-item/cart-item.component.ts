import { Component, EventEmitter, Input, Output } from '@angular/core'
import { ProductCart } from '../../../models/productCart'
import { CartService } from '../../../services/cart.service'

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent {
  @Input() productCart: ProductCart
  @Output() newQuantity = new EventEmitter<ProductCart>()
  @Output() removeProduct = new EventEmitter<ProductCart>()

  constructor (private readonly cartService: CartService) {
    this.productCart = {
      product: {
        id: 1,
        name: '',
        price: 0,
        url: '',
        description: ''
      },
      quantity: 1,
      totalPrice: 0
    }
  }

  onChange (value: string): void {
    this.productCart.quantity = Number(value)
    this.newQuantity.emit(this.productCart)
  }

  remove (pc: ProductCart): void {
    this.removeProduct.emit(pc)
  }
}
