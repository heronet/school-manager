import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Category } from '../models/Category';
import { Order } from '../models/Order';
import { PaginatedResult } from '../models/PaginatedResult';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private baseUrl = environment.base_url;

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }
  getCategories() {
    return this.http.get<Category[]>(`${this.baseUrl}/products/categories`);
  }
  addCategory(name: string) {
    return this.http.post<Category[]>(`${this.baseUrl}/products/category`, { name });
  }
  addProduct(product: Partial<Product>) {
    return this.http.post(`${this.baseUrl}/products`, product);
  }
  deleteProduct(id: string) {
    return this.http.delete(`${this.baseUrl}/products/${id}`);
  }
  orderProduct(order: Partial<Order>) {
    return this.http.post(`${this.baseUrl}/products/order`, order);
  }
  deliverOrder(order: Partial<Order>) {
    return this.http.patch(`${this.baseUrl}/products/orders`, order);
  }
  getOrders(pageNumber: number, pageSize: number) {
    return this.http.get<PaginatedResult<Order>>(`${this.baseUrl}/products/orders?pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }

}
