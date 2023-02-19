import { Injectable } from '@angular/core'
import { Product } from '../models/product'
import { ProductCart } from '../models/productCart'

@Injectable({
  providedIn: 'root'
})
export class CartService {
  productCartList: ProductCart[]
  totalCartPrice: number = 0

  constructor () {
    this.productCartList = []
  }

  getCart (): ProductCart[] {
    return this.productCartList
  }

  addProductToCart (p: Product, q: number): void {
    const newProductCart = {
      product: p,
      quantity: q,
      totalPrice: p.price * q
    }

    if (typeof (this.getProductCartByID(p.id)) === 'undefined') {
      this.productCartList.push(newProductCart)
    } else {
      this.addQuantityToExisting(p.id, q)
    }
  }

  removeProductFromCart (id: number): void {
    this.productCartList = this.productCartList.filter(pc => pc.product.id !== id)
  }

  getTotalCartPrice (): number {
    return Number(this.productCartList.reduce((acc, curr) => acc + curr.totalPrice, 0).toFixed(2))
  }

  getProductCartByID (id: number): ProductCart {
    return this.productCartList.filter(pc => pc.product.id === id)[0]
  }

  addQuantityToExisting (id: number, q: number): void {
    const objIndex = this.productCartList.findIndex(obj => obj.product.id === id)
    this.productCartList[objIndex].quantity = Number(this.productCartList[objIndex].quantity) + Number(q)
    this.productCartList[objIndex].totalPrice = this.productCartList[objIndex].product.price * this.productCartList[objIndex].quantity
  }

  recalculateAfterQuantityChange (pc: ProductCart): void {
    const objIndex = this.productCartList.findIndex(obj => obj.product.id === pc.product.id)
    this.productCartList[objIndex].quantity = pc.quantity
    this.productCartList[objIndex].totalPrice = Number(pc.quantity) * Number(pc.product.price)
  }
}
