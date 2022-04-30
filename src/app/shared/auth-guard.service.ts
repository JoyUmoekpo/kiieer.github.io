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
        console.log("hi")
        return true; 
      }  else {
      this.router.navigate(['login']);
      return false;
    }
    }
  
  }