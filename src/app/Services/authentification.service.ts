import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { customer, customersigup } from './customers.service';
const AUTH_API = 'https://localhost:7100/api/Authentication/';
//                https://localhost:7100/api/Authentication/SignUp
// const httpOptions = {
//   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
// };

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http: HttpClient) { }
  login(username: string, password: string): Observable<any>{
    return this.http.post(AUTH_API + 'SignIn', {
      username,
      password
    }, {responseType: 'text'});
  }

  register(city: string, email : string, firstName : string, lastName : string, password : string, street : string, zipCode : number): Observable<any> {
    return this.http.post(AUTH_API + 'SignUp', {
    city,
    email,
    firstName,
    lastName,
    password,
    street,
    zipCode
    }, {responseType: 'text'});
}
}
