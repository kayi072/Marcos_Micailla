import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword  } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  canProceed = false;
  constructor(private alertController: AlertController, private router: Router, private toastController: ToastController) { }

  canActivate() {
    if (localStorage.getItem("loggedIn") == "true") {
      return true;
    }
    this.router.navigate(['login']);
    return false
  }

  setAuthentication(auth: boolean) {
    if (auth == true) {
      localStorage.setItem("loggedIn", "true");
    } else (
      localStorage.setItem("loggedIn", "false")
    )
  }
  
  async signup(email: string, password: string, retypePassword: string) {
    if (!email || !password || !retypePassword) {
      this.presentAlert('WARNING', 'Please fill in all fields.');
      return; 
    }

    if (password !== retypePassword) {
      this.presentAlert('ERROR', 'Password does not match.');
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.toastDisplay('Success! Your signup is complete.');
      this.router.navigate(['login']);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorMessage.includes("Error (auth/email-already-in-use)")) {
        this.presentAlert('ERROR', 'Email is already used.');
      } else if (errorMessage.includes("Error (auth/invalid-email).")) {
        this.presentAlert('ERROR', 'Invalid Email');
      }
    })
  }

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: ['OK']
    });
    await alert.present();
  }

  async toastDisplay(message: string){
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom'
    })
    await toast.present();
  }

  async login(email: string, password: string) {

    if (!email || !password) {
      this.presentAlert('WARNING', 'Please fill in all fields.');
      return; 
    }

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      this.setAuthentication(true);
      this.presentAlert('SUCCESS', 'Login Successfully. Welcome!');
      this.router.navigate(['home']);
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error);
      this.presentAlert('ERROR', 'Invalid. Please check your email or password.');
    })

}
}