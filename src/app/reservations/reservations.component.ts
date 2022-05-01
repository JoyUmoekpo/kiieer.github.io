import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.css']
})
export class ReservationsComponent implements OnInit {
  title = "Creating Reservation...";
  @Input() reservDetails = {checkinDate: '', checkoutDate: ''};
  constructor(public restApi: RestApiService, public router: Router) { }

  ngOnInit() {
  }

  addReservation(dataReservation: any) {
    this.restApi.createReservation(this.reservDetails).subscribe((data: {}) => {
      this.router.navigate(['/myreservations']);

    });
  }
}
