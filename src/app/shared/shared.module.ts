import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import { CardSensoresComponent } from './component/card-sensores/card-sensores.component';
import { MapaComponent } from './component/mapa/mapa.component';
import { TablaDatosSensorComponent } from './component/tabla-datos-sensor/tabla-datos-sensor.component';



@NgModule({
  declarations: [
    NavComponent,
    CardSensoresComponent,
    MapaComponent,
    TablaDatosSensorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    CardSensoresComponent,
    MapaComponent,
    TablaDatosSensorComponent
  ]
})
export class SharedModule { }
