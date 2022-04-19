import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer } from './customers.service';

@Injectable({
  providedIn: 'root'
})
export class HttpGetCustomerService {
  private apiUrl = 
  'https://localhost:7100/api/Customer';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Array<customer>>{
    return this.http.get<Array<customer>>(this.apiUrl);
  }
}
