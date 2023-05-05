import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlantsComponent } from './plants/plants.component';
import { HumidityComponent } from './humidity/humidity.component';
import { SensorComponent } from './sensor/sensor.component';
import { AlertComponent } from './alert/alert.component';
import { HistoricComponent } from './historic/historic.component';
import { IntranetComponent } from './intranet.component';


const routes: Routes = [
   {path:'',  component:IntranetComponent, children:[
       {path:'home', component:HomeComponent},
       {path:'plants', component:PlantsComponent},
       {path:'humidity', component: HumidityComponent},
       {path:'sensor', component: SensorComponent},
       {path:'alert', component:AlertComponent},
       {path:'historic', component:HistoricComponent}
   ]} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class IntranetRoutingModule { }




