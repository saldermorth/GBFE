import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { customer } from './customers.service';

@Injectable({
  providedIn: 'root',
})
export class HttpGetCustomerService {
  private apiUrl = 'https://localhost:7100/api/Customer';

  private apiUrlEmail = 'https://localhost:7100/api/Customer/berg@domain.com';

  constructor(private http: HttpClient) {}

  deleteCustomer(data: number): Observable<any> {
    var deleteurl = `${this.apiUrl}/${data}`;
    console.log(deleteurl);
    return this.http.delete(deleteurl);
  }
  updateCustomer(hero: customer): Observable<customer> {
    var updateurl = `${this.apiUrl}/${hero.id}`;
    return this.http.put<customer>(updateurl, hero);
  }

  getCustomers(): Observable<Array<customer>> {
    return this.http.get<Array<customer>>(this.apiUrl);
  }

  getCustomerByEmail(data: string): Observable<customer> {
    let params = new HttpParams().set('?email', data);
    console.log(this.apiUrl, { params });
    return this.http.get<customer>(this.apiUrlEmail);
  }
  postCustomer(customer: customer): Observable<customer> {
    return this.http.post<customer>(this.apiUrl, customer);
  }
}
