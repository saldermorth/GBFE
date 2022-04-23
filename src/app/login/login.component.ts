import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import {
  customer,
  customersigin,
  customersigup,
} from '../Services/customers.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input()
  createUser?: boolean = true;

  constructor(private httpService: AuthentificationService) {}

  ngOnInit(): void {}
  onSubmitSignIn(data: customersigin) {
    this.httpService.login(data.username, data.password).subscribe((data) => {
      console.log('Login sent' + data.username);
    });
  }
  SignUpSelected() {
    this.createUser = true;
  }
  LogInSelected() {
    this.createUser = false;
  }
  onSubmitCreate(data: customersigup) {
    console.log(data);
    this.httpService
      .register(
        data.city,
        data.email,
        data.firstName,
        data.lastName,
        data.password,
        data.street,
        data.zipCode
      )
      .subscribe((data) => {
        console.log('fgh');
      });
  }
}
