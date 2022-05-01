import { Injectable } from '@angular/core';
  import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
  import { AuthenticationService } from './authentication.service';
  
  @Injectable({
    providedIn: 'root'
  })
  export class AuthGuardService {
  
    constructor(private router: Router,
      private authService: AuthenticationService) { }
  
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if (this.authService.isUserLoggedIn()) {
        return true; 
      }  else {
        sessionStorage.removeItem('username')
        sessionStorage.removeItem('id')
      return false;
    }
    }
  
  }