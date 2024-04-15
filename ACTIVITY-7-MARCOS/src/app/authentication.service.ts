import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedInUsername: string = '';
  canProceed = false;
  constructor() { }

  //ACTIVITY #6
  canActivate() {
    return this.canProceed;
  }

  canDeactivate(){
    return this.canProceed = false;
  }
  
  getLoggedInUsername(): string {
    return this.loggedInUsername;
  }

}
