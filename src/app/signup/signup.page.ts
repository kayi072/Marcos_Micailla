import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  email: string = '';
  password: string = '';
  retypePassword: string = '';

  constructor(
    private router: Router, 
    private alertController: AlertController
  ) {}

  ngOnInit() {
  }

  async signUp() {
    if (!this.email || !this.password || !this.retypePassword) {
      this.presentAlert('Error', 'Please fill all fields')
      return;
  }

  if (this.password !== this.retypePassword) {
    this.presentAlert('Error', 'Password dont match');
    return;
  }

  const auth = getAuth();

  createUserWithEmailAndPassword(auth, this.email, this.password)
  .then((userCredential) => {
    console.log(userCredential);
    const user = userCredential.user;
    this.presentAlert('Success', 'Sign up successfully');
    this.router.navigate(['/signin']);  
  })  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(error);
    // console.log(errorCode);
    // console.log(errorMessage);
    // this.presentAlert('Error', errorMessage)
  });

  this.email = '';
  this.password = '';
  this.retypePassword = '';

}  async presentAlert(header: string, message: string){
  const alert = await this.alertController.create({
    header: 'Alert',
    message: message,
    buttons: ['CLOSE']
  });
  await alert.present();
}
  }
