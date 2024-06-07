import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {

users: User = new User();

  
  section: number[] = [1,2,3,4,5];

  course: string[] = ['BSIT', 'ELECTRICAL ENGINEERING', 'CIVIL ENGINEERING', 'BSA', 'BSBA-FM', 'BSBA-MM', 'BSBA-HRDM', 'BSED' ];

  constructor(private router: Router, private auth: AuthService, private homeService: HomeService) { }

  ngOnInit() {
  }

  logOut() {
    this.router.navigate(['login']);
    this.auth.setAuthentication(false);
  }


  save(){
    if (!this.users.id) {
      this.homeService.addData(this.users);
      this.homeService.presentAlert('Success','Data Added')
    } 
      this.users = new User();
      this.router.navigate(['home']);
  }

}
