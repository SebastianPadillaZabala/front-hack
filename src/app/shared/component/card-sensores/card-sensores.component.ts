import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from 'src/app/interfaces/sensor.interface';

@Component({
  selector: 'shared-card-sensores',
  templateUrl: './card-sensores.component.html',
  styleUrls: ['./card-sensores.component.css']
})
export class CardSensoresComponent implements OnInit {

  @Input()
  sensor!:Sensor;

  longitud!: number;
  latitud!: number;

  public hasLoaded: boolean = false;

  constructor(){
  }

  ngOnInit(): void {
    this.longitud = Number.parseFloat(this.sensor.longitud.valueOf());
    this.latitud = Number.parseFloat(this.sensor.latitud.valueOf());
    setTimeout( () =>{
      this.hasLoaded = true;
    }, 5000 );
  }




}
