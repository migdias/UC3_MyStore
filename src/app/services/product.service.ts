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
  constructor (private readonly http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this._jsonURL)
  }
}
