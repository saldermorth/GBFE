import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { customer } from './customers.service';
import { OrderService } from './order.service';
@Injectable({
  providedIn: 'root'
})
export class HttporderService {
private apiUrl = 
  'https://localhost:7100/api/Order';
  constructor(private http: HttpClient) { }


getOrders(): Observable<Array<OrderService>>{
  return this.http.get<Array<OrderService>>(this.apiUrl);
}
postOrders(order: OrderService): Observable<OrderService>{
  return this.http.post<OrderService>(this.apiUrl,order)
}

}
