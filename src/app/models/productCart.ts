import { Product } from './product'

export class ProductCart {
  product: Product
  quantity: number
  totalPrice: number

  constructor () {
    this.product = new Product()
    this.quantity = 0
    this.totalPrice = 0
  }
}
