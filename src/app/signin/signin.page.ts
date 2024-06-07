import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { signInWithEmailAndPassword, getAuth } from "firebase/auth"

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  email: string = '';
  password: string = '';
  // loginArray: { username: string, password: string }[] = [
  //   { username: 'regUser', password: 'user' },
  //   { username: 'admin', password: 'admin123' },
  // ];

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
    private router: Router,
    private authService: AuthService
  ) { }

  signIn() {
    const auth = getAuth();

    signInWithEmailAndPassword(auth, this.email, this.password)
    .then((userCredential) => {
      console.log(userCredential);
      const user = userCredential.user;
      this.authService.setAuthentication(true);
      this.presentAlert('Success', 'Welcome to my portfolio '+user.email+'!');
      this.router.navigate(['/home']);
    })  
    
    .catch((error) => {
      if (!this.email || !this.password) {
        this.presentAlert('Error', 'Please fill in all the fields.');
        return;
      }
      if (this.email || !this.password) {
        this.presentAlert('Error', 'Invalid email or password.');
        return;
      }
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(error);
      this.presentAlert('Error', 'Invalid Password');
      // console.log(errorCode);
      // console.log(errorMessage);
      // this.presentAlert('Error', errorMessage)
    });

  }

  ngOnInit() {
  }

 async presentAlert(header: string, message: string){
  const alert = await this.alertController.create({
    header: 'Alert',
    message: message,
    buttons: ['CLOSE']
  });
  await alert.present();
}

  // async signIn() {
  //   const user = this.loginArray.find(cred => cred.username === this.email && cred.password === this.password);
  //   if (user) {
  //     console.log('Sign In Success');
  //     const alert = await this.alertController.create({
  //       header: 'welcome!',
  //       message: 'sign in successfully',
  //       buttons: ['close']
  //     });

  //   await alert.present();
  //   this.authenticationService.canProceed = true;
  //   this.router.navigate(['/home']);
  //   } else {
  //     console.log('Invalid username or password');
  //     const toast = await this.toastController.create({
  //       message: 'sign in failed.',
  //       duration: 5000,
  //       color: 'danger'
  //     });

  //     await toast.present();
  //   }
  // }
  
  logOut(): void {
    this.authService.canProceed = false;
    this.router.navigate(['/login']);
  }

  signUp(): void {
    this.authService.canProceed = true;
    this.router.navigate(['/signup']);
  }
  
}
