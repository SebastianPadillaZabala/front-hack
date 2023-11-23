import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './component/nav/nav.component';
import { CardSensoresComponent } from './component/card-sensores/card-sensores.component';



@NgModule({
  declarations: [
    NavComponent,
    CardSensoresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavComponent,
    CardSensoresComponent
  ]
})
export class SharedModule { }
