import { Injectable } from '@angular/core'
import { type Product } from '../models/product'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly _jsonURL = '/assets/data.json'
  productList: Product[] = []
  constructor (private readonly http: HttpClient) {
    this.getJSON().subscribe(data => { this.productList = data })
  }

  getJSON (): Observable<any> {
    return this.http.get(this._jsonURL)
  }

  getProducts (): Product[] {
    return this.productList
  }

  getProductByID (id: number): Product {
    return this.productList.filter(p => p.id === id)[0]
  }
}
