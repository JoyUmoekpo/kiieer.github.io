import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomserviceComponent } from './roomservice/roomservice.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './user/user.component';
import { MaterialModule } from './material/material.module';
import { MailinglistComponent } from './mailinglist/mailinglist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoomserviceComponent,
    ReservationsComponent,
    AttractionsComponent,
    UserComponent,
    MailinglistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [MailinglistComponent],
  providers: [MailinglistComponent],  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
