import {NgModule, CUSTOM_ELEMENTS_SCHEMA } from'@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';

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
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule

  ],
  entryComponents: [MailinglistComponent],
  providers: [MailinglistComponent],  bootstrap: [AppComponent],
  schemas:  [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
