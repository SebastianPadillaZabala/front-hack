import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/interfaces/sensor.interface';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{
  public sensores: Sensor[] = [];

  constructor( private route : Router, private sensorService: ServicesService) {}

  ngOnInit(): void {
    this.sensorService.getAll().subscribe(resp =>{
      console.log(resp);
      if (!resp) return;
      this.sensores = resp;
      console.log(this.sensores);
    });
  }

  redirectToShow(id : number){
    this.route.navigate(['/show-sensor/12']);
  }

}
