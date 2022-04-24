import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import { customersigup } from '../Services/customers.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private httpService: AuthentificationService) {}

  ngOnInit(): void {}

  //   onSubmitCreate(data: customersigup) {
  //     console.log(data);
  //     this.httpService
  //       .register(
  //         data.city,
  //         data.email,
  //         data.firstName,
  //         data.lastName,
  //         data.password,
  //         data.street,
  //         data.zipCode
  //       )
  //       .subscribe((data) => {
  //         console.log('fgh');
  //       });
  //   }
  // }
  onSubmitReg(data: customersigup) {
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
      .subscribe(
        (data) => {
          console.log(data);
          this.isSuccessful = true;
          this.isSignUpFailed = false;
        },
        (err) => {
          this.errorMessage = err.error.message;
          this.isSignUpFailed = true;
        }
      );
  }
}
