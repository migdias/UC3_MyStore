import { Component, Input } from '@angular/core'
import { Product } from 'src/app/models/product'
import { CartService } from 'src/app/services/cart.service'

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product
  // @Output() showAlert = new EventEmitter<[boolean, string]>()
  quantity: number = 1
  isClicked = false
  buttonText = 'Add to Cart'

  constructor (private readonly cartService: CartService) {
    this.product = {
      id: 1,
      name: '',
      price: 0,
      url: '',
      description: ''
    }
  }

  addToCart (): void {
    this.cartService.addProductToCart(this.product, this.quantity)
    // this.showAlert.emit([true, this.product.name])
  }

  onClick (): void {
    this.buttonText = 'Added'
    this.isClicked = true
    setTimeout(() => {
      this.isClicked = false
      this.buttonText = 'Add to Cart'
    }, 2000)
  }
}
