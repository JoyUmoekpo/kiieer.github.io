import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-mailinglist',
  templateUrl: './mailinglist.component.html',
  styleUrls: ['./mailinglist.component.css']
})
export class MailinglistComponent implements OnInit {
  mailinglistForm: FormControl = new FormControl;

  constructor(private dialogRef: MatDialogRef<MailinglistComponent>) {

  }

  public closeDialog() {
    this.dialogRef.close();
  }

  subscribe() {
    if(this.mailinglistForm.valid) {
      console.log(this.mailinglistForm.value);
    }

  }

  ngOnInit(): void {

    this.mailinglistForm = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  }

}
