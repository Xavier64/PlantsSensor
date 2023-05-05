import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntranetComponent } from './intranet.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { HumidityComponent } from './humidity/humidity.component';
import { SensorComponent } from './sensor/sensor.component';
import { AlertComponent } from './alert/alert.component';
import { HistoricComponent } from './historic/historic.component';



@NgModule({
  declarations: [
    IntranetComponent,
    NavbarComponent,
    HomeComponent,
    PlantsComponent,
    HumidityComponent,
    SensorComponent,
    AlertComponent,
    HistoricComponent,
  ],
  imports: [
    CommonModule,
    NavbarComponent,
  ]
})
export class IntranetModule { }
