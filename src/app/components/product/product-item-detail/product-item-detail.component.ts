import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Product } from 'src/app/models/product'
import { CartService } from 'src/app/services/cart.service'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product = new Product()
  id: number = 0
  quantity: number = 1
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private sub: any

  constructor (private readonly productService: ProductService,
    private readonly routes: ActivatedRoute, private readonly cartService: CartService) {}

  ngOnInit (): void {
    this.sub = this.routes.params.subscribe(params => {
      this.id = Number(params['id'])
    })
    this.product = this.productService.getProductByID(this.id)
  }

  addToCart (): void {
    this.cartService.addProductToCart(this.product, this.quantity)
    alert('Product added to cart.')
  }
}
