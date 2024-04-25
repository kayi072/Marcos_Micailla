import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  signInEmail: string = '';
  canProceed = false;
  constructor() { }
  setAuthentication(auth:boolean){
    if (auth) {
      localStorage.setItem("signedIn","true");
    }
  }
  canActivate() {
    return this.canProceed;
  }

  canDeactivate(){
    return this.canProceed = false;
  }
  
  getLoggedInUsername(): string {
    return this.signInEmail;
  }

}
