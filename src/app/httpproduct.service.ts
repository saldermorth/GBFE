import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ProductService } from './Services/product.service';

@Injectable({
  providedIn: 'root'
})
export class HttpproductService {
 private apiUrl = 
  'https://localhost:7100/api/Product';
  constructor(private http: HttpClient) { }

  getProduct(): Observable<Array<ProductService>>{
    return this.http.get<Array<ProductService>>(this.apiUrl);
  }
}
