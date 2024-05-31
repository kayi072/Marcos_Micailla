import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  logInUsername: string = '';
  canProceed = false;
  constructor() { }

  canActivate() {
    return this.canProceed;
  }

  canDeactivate(){
    return this.canProceed = false;
  }
  
  getUsername(): string {
    return this.logInUsername;
  }

}
