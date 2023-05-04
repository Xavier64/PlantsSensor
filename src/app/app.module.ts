import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './intranet/home/home.component';
import { PlantsComponent } from './intranet/plants/plants.component';
import { HumidityComponent } from './intranet/humidity/humidity.component';
import { SensorComponent } from './intranet/sensor/sensor.component';
import { AlertComponent } from './intranet/alert/alert.component';
import { HistoricComponent } from './intranet/historic/historic.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlantsComponent,
    HumidityComponent,
    SensorComponent,
    AlertComponent,
    HistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
