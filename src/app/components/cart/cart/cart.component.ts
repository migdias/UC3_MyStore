import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ProductCart } from 'src/app/models/productCart'
import { User } from 'src/app/models/user'
import { CartService } from 'src/app/services/cart.service'
import { UserService } from 'src/app/services/user.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  productCartList: ProductCart[] = []
  totalCartPrice: number = 0

  userFullName: string = ''
  userAddress: string = ''
  userCCNumber: string = ''

  constructor (private readonly cartService: CartService, private readonly router: Router, private readonly userService: UserService) {}

  ngOnInit (): void {
    this.productCartList = this.cartService.getCart()
    this.totalCartPrice = this.cartService.getTotalCartPrice()
  }

  reCalc (pc: ProductCart): void {
    if (pc.quantity <= 0) {
      this.cartService.removeProductFromCart(pc.product.id)
    } else {
      this.cartService.recalculateAfterQuantityChange(pc)
      this.totalCartPrice = this.cartService.getTotalCartPrice()
    }
    this.productCartList = this.cartService.getCart()
  }

  onSubmit (): void {
    const newUser: User = {
      fullName: this.userFullName,
      address: this.userAddress,
      ccnumber: this.userCCNumber
    }
    this.userService.newUser(newUser)
    void this.router.navigate(['/cart/confirmedOrder'])
  }

  removeProduct (pc: ProductCart): void {
    this.cartService.removeProductFromCart(pc.product.id)
    this.productCartList = this.cartService.getCart()
    this.totalCartPrice = this.cartService.getTotalCartPrice()
  }
}
