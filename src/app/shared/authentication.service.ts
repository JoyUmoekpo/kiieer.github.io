import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: Users[] = [];
  constructor(public restApi: RestApiService) { }

  authenticate(username: string, password: string) {
    this.restApi.loginUser(username, password).subscribe(data => this.users = data);
    if (this.users.length > 0) {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }

  logOut() {
    console.log("loggin out")
    sessionStorage.removeItem('username')
  }

}