import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  Url: string = 'http://localhost:8080/products';

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<Product[]>(this.Url);
  }

  createProduct(product: Product) {
    return this.http.post<Product>(this.Url, product);
  }

  getProductId(id: number) {
    return this.http.get<Product>(this.Url + '/' + id);
  }

  updateProduct(product: Product) {
    return this.http.put<Product>(this.Url + '/' + product.id, product);
  }

  deleteProduct(product: Product) {
    return this.http.delete<Product>(this.Url + '/' + product.id);
  }
}
