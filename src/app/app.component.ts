import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './Services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  username?: string;
  title = 'GBFE';

  constructor(private tokenService: TokenStorageService) {
    this.roles = []; //Initialize
  }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showAdminBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  logout(): void {
    this.tokenService.signOut();
    window.location.reload();
  }
}
