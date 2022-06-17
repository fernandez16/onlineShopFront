import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../Model/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerServiceService {
  Url: string = 'http://localhost:8080/customers';

  constructor(private http: HttpClient) {}

  getCustomers() {
    return this.http.get<Customer[]>(this.Url);
  }

  createCustomer(customer: Customer) {
    return this.http.post<Customer>(this.Url, customer);
  }

  getCustomerId(id: number) {
    return this.http.get<Customer>(this.Url + '/' + id);
  }

  updateCustomer(customer: Customer) {
    return this.http.put<Customer>(this.Url + '/' + customer.id, customer);
  }

  deleteCustomer(customer: Customer) {
    return this.http.delete<Customer>(this.Url + '/' + customer.id);
  }
}

