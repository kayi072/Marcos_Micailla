import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  userName: string = '';
  password: string = '';
  loginArray: { username: string, password: string }[] = [
    { username: 'user1', password: 'user' },
    { username: 'admin123', password: 'admin123' },
  ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {}

  async logIn() {
    const user = this.loginArray.find(cred => cred.username === this.userName && cred.password === this.password);
    if (user) {
      console.log('Login Success');
      const alert = await this.alertController.create({
        header: 'Alert',
        message: 'Login Success',
        buttons: ['OK']
      });

    await alert.present();
    this.authenticationService.canProceed = true;
    this.router.navigate(['tabs/dashboard']);
    } else {
      console.log('Invalid username or password');
      const toast = await this.toastController.create({
        message: 'Login Failed',
        duration: 2000,
        color: 'danger'
      });

      await toast.present();
    }
  }
  
  logOut(): void {
    this.authenticationService.canProceed = false;
    this.router.navigate(['/login']);
  }
}
