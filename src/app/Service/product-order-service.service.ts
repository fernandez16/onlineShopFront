import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductOrder } from '../Model/productOrder';

@Injectable({
  providedIn: 'root'
})
export class ProductOrderServiceService {
  Url: string = 'http://localhost:8080/productOrders';

  constructor(private http: HttpClient) {}

  getProductOrders() {
    return this.http.get<ProductOrder[]>(this.Url);
  }

  createProductOrder(productOrders: ProductOrder) {
    return this.http.post<ProductOrder>(this.Url, productOrders);
  }

  getProductOrderId(id: number) {
    return this.http.get<ProductOrder>(this.Url + '/' + id);
  }

  updateProductOrder(productOrders: ProductOrder) {
    return this.http.put<ProductOrder>(this.Url + '/' + productOrders.id, productOrders);
  }

  deleteProductOrder(productOrders: ProductOrder) {
    return this.http.delete<ProductOrder>(this.Url + '/' + productOrders.id);
  }
}
