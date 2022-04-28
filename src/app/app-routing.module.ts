import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RoomserviceComponent } from './roomservice/roomservice.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { AttractionsComponent } from './attractions/attractions.component';
const routes:Routes=[
  {path:'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'roomservice', component: RoomserviceComponent},
  {path: 'reservations', component: ReservationsComponent},
  {path: 'attractions', component: AttractionsComponent},
  {path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
