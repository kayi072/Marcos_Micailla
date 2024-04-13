import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) { }

  async login() {
    await this.authService.login(this.username, this.password);
    // Navigate to dashboard after successful login
    if (this.authService.isLoggedIn()) {
      // Navigate to dashboard
    }
  }
}
