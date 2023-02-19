import { Component, OnInit } from '@angular/core'
import { ProductCart } from 'src/app/models/productCart'
import { User } from 'src/app/models/user'
import { UserService } from 'src/app/services/user.service'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  userDetails: User = new User()
  order: ProductCart[] = []
  totalPayment: number = 0

  constructor (private readonly userService: UserService, private readonly cartService: CartService) { }

  ngOnInit (): void {
    this.userDetails = this.userService.getUser()
    this.order = this.cartService.getCart()
    this.totalPayment = this.cartService.getTotalCartPrice()
  }
}
