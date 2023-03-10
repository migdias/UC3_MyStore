import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/models/product'
import { ProductService } from 'src/app/services/product.service'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  providers: []
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []

  constructor (private readonly productService: ProductService) {}

  ngOnInit (): void {
    // console.log(this.alertActive)
    this.productService.getProducts().subscribe((data) => { this.productList = data })
  }
}
