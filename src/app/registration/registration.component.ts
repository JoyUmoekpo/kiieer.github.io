import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  title = 'Registration';
  @Input() userDetails = {firstName: '', lastName: '', password: '', username: '', email: '', phoneNumber: 0 };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addUser(dataUser: any) {
    this.restApi.createUser(this.userDetails).subscribe((data: {}) => {
      this.router.navigate(['/login']);

    });
  }
}