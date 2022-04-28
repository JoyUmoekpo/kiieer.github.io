import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MailinglistComponent } from './mailinglist/mailinglist.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Bikini Bottom';
  constructor(public dialog: MatDialog) {
    setTimeout(() => {
      if (!window.sessionStorage.getItem('newsletter')) {
        this.dialog.open(MailinglistComponent, {
          width: '1000px',
          data: ''
        });
      }
    }, 1500);
  }
}
