import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-components',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class ComponentsPage implements OnInit {

  condition = false;
  constructor(private alertController: AlertController, private toastController: ToastController) { }

  ngOnInit() {

  }

  async alert(){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Your Toast Message Here',
      duration: 2000
    });
    toast.present();
  }

  async dismissToast(){
    const toast = await this.toastController.getTop();
    if (toast) {
      toast.dismiss();
    }
  }

}
