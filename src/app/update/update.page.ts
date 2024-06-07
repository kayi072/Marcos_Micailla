import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User, iUser } from '../home/home.model';
import { HomeService } from '../home/home.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  users: User = new User();

  
  section: number[] = [1,2,3,4,5];

  course: string[] = ['BSIT', 'ELECTRICAL ENGINEERING', 'CIVIL ENGINEERING', 'BSA', 'BSBA-FM', 'BSBA-MM', 'BSBA-HRDM', 'BSED' ];
  id: any;
  isLoading: boolean = false;

  constructor(private router: Router, private auth: AuthService, private homeService: HomeService, private route: ActivatedRoute, private alertController: AlertController) { }
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.updates(this.homeService.newUserList);
  }

  logOut() {
    this.router.navigate(['login']);
    this.auth.setAuthentication(false);
  }

  async update(){
  this.isLoading = true;
    if(this.isLoading = true) {
      if (this.users.id) {
      await this.homeService.updateData(this.users);
      this.auth.toastDisplay('Data Updated')
    }
    this.users = new User(); 
    this.router.navigate(['home']);
    }
    this.isLoading = false;
  }

  updates(users: iUser[]) {
    users.forEach(user => {
      if (this.id == user.id) {
        this.users.id = user.id;
        this.users.firstname = user.firstname;
        this.users.lastname = user.lastname;
        this.users.course = user.course;
        this.users.section = user.section;
        this.users.dateEnrolled = user.dateEnrolled;
        this.users.gwa = user.gwa;
        this.users.isGraduated = user.isGraduated;
      }
    });
  }
}
