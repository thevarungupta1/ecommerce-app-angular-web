import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategory } from '../models/category.model';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private BASE_URL = 'https://api.escuelajs.co/api/v1'
  private MY_API_UTL = 'http://localhost:5167/api'

  constructor(private http: HttpClient) { }

  // get all categories
  getCategories(): Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`${this.MY_API_UTL}/Category`)
  }

  // get all products
  getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`${this.BASE_URL}/products`)
  }

  // get single product
  getProductById(id: number): Observable<IProduct>{
    return this.http.get<IProduct>(`${this.BASE_URL}/products/${id}`)
  }

}
