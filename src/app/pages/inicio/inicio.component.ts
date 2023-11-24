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

  public isModal : boolean = true;

  constructor( private route : Router, private sensorService: ServicesService) {}

  ngOnInit(): void {
    this.sensorService.getAll().subscribe(resp =>{
      if (!resp) return;
      this.sensores = resp;
      console.log(this.sensores);
    });
  }

  redirectToShow(id : number){
    console.log(id);
    this.route.navigate([`/show-sensor/${id.toString()}`]);
  }


  recibirClose(isClose : boolean){
    this.isModal = !isClose;
  }

}
