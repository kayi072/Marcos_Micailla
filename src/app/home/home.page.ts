import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
  })
  export class HomePage {

  constructor(private router: Router) {
  }

  clickByEvent(){
    this.router.navigate(['/event'])
  }

  goToPage1(){
    this.router.navigateByUrl('/page1')
  }
  
}
