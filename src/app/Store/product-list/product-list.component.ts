import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Model/product';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] | undefined;
  newProductOrder: Product[] = [];
  selectedCategory: string = null;

  constructor(
    private router: Router,
    private productService: ProductServiceService
  ) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  get productsCategories(): string[] {
    let categoryArray: string[] = [];
    this.products.forEach((product) => {
      if (!categoryArray.includes(product.category)) {
        categoryArray.push(product.category);
      }
    });
    return categoryArray;
  }

  get filteringByCategory(): boolean {
    if (this.selectedCategory != null) {
      return true;
    } else {
      return false;
    }
  }

  clearFilter(): void {
    this.selectedCategory = null;
  }

  addToNewProductOrder(product: Product): void {
    this.newProductOrder.push(product);
  }

  clearNewProductOrder(): void{
    this.newProductOrder = []
  }
}
