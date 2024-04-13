import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthenticationService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userInput: string = "";
  passInput: string = "";

  constructor(
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {}

  ionViewWillEnter() {
    this.userInput = '';
    this.passInput = '';
  }

  async logIn() {
    const credentials = [
      { 
        username: 'user', 
        password: '1111' 
      },
      { 
        username: 'admin', 
        password: '1234' 
      },
      { 
        username: 'visitor', 
        password: '0000' 
      }
    ];

    const userExists = credentials.find(user => user.username === this.userInput && user.password === this.passInput);

    if (userExists) {
      localStorage.setItem('username', this.userInput);
      localStorage.setItem('password', this.passInput);

      const alert = await this.alertCtrl.create({
        header: 'ALERT',
        subHeader: 'STATUS',
        message: 'LOGGED IN SUCCESSFULLY',
        buttons: ['OK']
      });

      await alert.present();
      this.authService.canProceed = true;
      this.router.navigate(['tabs/dashboard']);
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Login Failed',
        duration: 5000
      });
      toast.present();
    }
  }
}
