import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import { CardSensoresComponent } from './component/card-sensores/card-sensores.component';
import { MapaComponent } from './component/mapa/mapa.component';



@NgModule({
  declarations: [
    NavComponent,
    CardSensoresComponent,
    MapaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    CardSensoresComponent,
    MapaComponent
  ]
})
export class SharedModule { }
