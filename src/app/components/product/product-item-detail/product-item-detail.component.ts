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
  buttonColorChange = false
  buttonText = 'Add to Cart'
  // eslint-disable-next-line @typescript-eslint/prefer-readonly
  private sub: any

  constructor (private readonly productService: ProductService,
    private readonly routes: ActivatedRoute, private readonly cartService: CartService) {}

  ngOnInit (): void {
    // Get the ID clicked
    this.sub = this.routes.params.subscribe(params => {
      this.id = Number(params['id'])
    })
    // Get the product by ID
    this.productService.getProducts().subscribe((data) => {
      this.product = data.filter(p => p.id === this.id)[0]
    })
  }

  addToCart (): void {
    this.cartService.addProductToCart(this.product, this.quantity)
  }

  onClick (): void {
    this.buttonText = 'Added'
    this.buttonColorChange = true
    setTimeout(() => {
      this.buttonColorChange = false
      this.buttonText = 'Add to Cart'
    }, 2000)
  }
}
