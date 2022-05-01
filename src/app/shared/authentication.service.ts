import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { timeout } from 'rxjs';
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
      this.verify(username, password);
      return true;
    } else {
      return false;
    }
  }

  verify(username: string, password: string) {
    sessionStorage.setItem('username', username)
    this.restApi.getId(username, password).subscribe(val => this.userId = val);
    sessionStorage.setItem('id', this.userId)
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