import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
  title = 'Attractions';
  constructor() { }

  ngOnInit(): void {
  }

}
