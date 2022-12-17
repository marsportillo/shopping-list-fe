import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) {
  
  }
  addProductService(request: Product) {
    console.log("Passa da qui");
    return this.http.post('http://localhost:3000/product', request);
  }
}
