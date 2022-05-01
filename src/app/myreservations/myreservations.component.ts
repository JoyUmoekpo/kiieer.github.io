import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-myreservations',
  templateUrl: './myreservations.component.html',
  styleUrls: ['./myreservations.component.css']
})
export class MyreservationsComponent implements OnInit {
  title="My Reservations"
  Reservations: any = [];
  constructor(public restApi: RestApiService) { }

  ngOnInit() {
    this.loadReservations();
  }

  loadReservations() {
    return this.restApi.getReservations().subscribe((data: {}) => {
      this.Reservations = data;
      console.log(data);
    });
  }

}
