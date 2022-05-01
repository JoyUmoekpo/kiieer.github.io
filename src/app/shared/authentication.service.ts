import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  users: Users[] = [];
  userId: string = "";
  constructor(public restApi: RestApiService) { }

  authenticate(username: string, password: string) {
    this.restApi.loginUser(username, password).subscribe(data => this.users = data);
    if (this.users.length > 0) {
      sessionStorage.setItem('username', username)
      this.restApi.getId(username, password).subscribe(val => this.userId = val);
      sessionStorage.setItem('id', this.userId)
      return true;
      
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    return !(user === null)
  }

  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('id')
  }

}