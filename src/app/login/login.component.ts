import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { customer, customersigup } from '../Services/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private httpService :AuthentificationService) {

   }

  ngOnInit(): void {
  }
onSubmitCreate(data: customersigup){
  console.log(data);
this.httpService.register(data.city, data.email, data.firstName, data.lastName, data.password, data.street, data.zipCode).subscribe(data => {
   console.log('fgh');
 });
 
}


}