import { Component } from '@angular/core';
import { User, iUser } from './home.model';
import { HomeService } from './home.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user: User = new User();
  userList : iUser[] = [];
  isLoading = false;

  constructor( private homeService: HomeService,
  private alertController: AlertController,
  private router: Router, private auth: AuthService
  ) {
  
  }

  ionViewWillEnter(){
    this.users();
  }

save(){
  if(this.user.id){
    this.homeService.updateData(this.user);
    this.homeService.presentAlert('Update', 'User Updated');
  } else {
    this.homeService.addData(this.user);
    this.homeService.presentAlert('Success', 'User Added');
  }
  this.user = new User();
  this.users();
}

async users(){
  this.isLoading = true;
  this.userList = await this.homeService.getUsers();
  this.homeService.newUserList = this.userList;
  this. isLoading = false;
}

edit(user: iUser){
  this.user = user;
}

async delete(user: User){
  this.isLoading = true;
  await this.homeService.deleteData(user);
  this.homeService.presentAlert('Delete', 'User Deleted');
  this.users();
  this.user = new User();
  this.isLoading = false;
}

update(user: User) {
  this.router.navigate(['update', user.id]);
  this.homeService.newUserList = this.userList;
  this.edit(user);
}

logOut() {
  this.router.navigate(['signin']);
  this.auth.setAuthentication(false);
}
}
