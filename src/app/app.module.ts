import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomserviceComponent } from './roomservice/roomservice.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AttractionsComponent } from './attractions/attractions.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    RoomserviceComponent,
    ReservationsComponent,
    AttractionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
