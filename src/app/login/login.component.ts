import { Component, Input, OnInit } from '@angular/core';
import { AuthentificationService } from '../Services/authentification.service';
import {
  customer,
  customersigin,
  customersigup,
} from '../Services/customers.service';
import { TokenStorageService } from '../Services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null,
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  @Input()
  createUser?: boolean = true;

  constructor(
    private httpService: AuthentificationService,
    private tokenStorage: TokenStorageService
  ) {}

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }
  reloadPage(): void {
    window.location.reload();
  }
  onSubmitSignIn(data: customersigin): void {
    this.httpService.login(data.username, data.password).subscribe(
      (data) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveToken(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      (err) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  ss(data: customersigin) {
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
}
