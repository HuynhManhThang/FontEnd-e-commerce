import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Product } from '../_model/product';
@Injectable()
export class ProductServicesService {
api='https://5e7b25270e04630016332d52.mockapi.io/PruductMB'
  constructor(
    private http : HttpClient,
  ) { }

getProduts():Observable<Product[]>{
  return this.http.get<Product[]>(this.api)
}
getProduct(id):Observable<Product>{
  return this.http.get<Product>(`${this.api}/${id}`);
}
addProduct(product):Observable<Product>{
return this.http.post<Product>(this.api,product);
}
editProduct(product):Observable<Product>{
return this.http.put<Product>(`${this.api}/${product.id}`,product);
  }
  removeProduct(id):Observable<Product>{
    return this.http.delete<Product>(`${this.api}/${id}`);
  }
}