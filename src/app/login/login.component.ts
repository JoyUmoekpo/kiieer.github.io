import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title="Login"

  username = 'user'
  password = ''
  invalidLogin = false
  @Input() userDetails = {username: '', password: ''};

  constructor(private router: Router, public restApi: RestApiService,
    private loginservice: AuthenticationService) { }

  ngOnInit() {
  }

  checkLogin() {
    if (this.loginservice.authenticate(this.username, this.password)
    ) {
      this.router.navigate([''])
      this.invalidLogin = false
    } else
      this.invalidLogin = true
  }

  addUser(dataUser: any) {

    //this.restApi.loginUser(this.userDetails).subscribe((data: {}) => {

    //});
  }
 
}