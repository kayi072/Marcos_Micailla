import { Component } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { ObjectService } from '../object.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  authenticated: boolean = false;
  loading: boolean = false;
  showObjectArray: number[] = [];

  constructor(
    public loadingController: LoadingController,
    public toastController: ToastController,
    public objectService: ObjectService // Inject the ObjectService
  ) {}

  async authenticate() {
    this.loading = true;
    const loading = await this.loadingController.create({
      message: 'Authenticating...'
    });
    await loading.present();

    setTimeout(() => {
      this.authenticated = true;
      this.loading = false;
      loading.dismiss();
    }, 2000);
  }

  async unauthenticate() {
    this.loading = true;
    setTimeout(() => {
      this.authenticated = false;
      this.loading = false;
    }, 2000);
  }

  async showObjects() {
    if (!this.authenticated) {
      this.presentErrorToast('Please authenticate first');
      return;
    }

    this.loading = true;
    setTimeout(() => {
      this.showObjectArray = [1, 2, 3, 4, 5];
      this.loading = false;
    }, 2000);
  }

  async addObject() {
    if (!this.authenticated) {
      this.presentErrorToast('Please authenticate first');
      return;
    }

    this.loading = true;
    setTimeout(() => {
      const nextNumber = this.showObjectArray.length + 1;
      this.showObjectArray.push(nextNumber);
      this.loading = false;
    }, 2000);
  }

  async presentErrorToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: 'danger'
    });
    toast.present();
  }
}
