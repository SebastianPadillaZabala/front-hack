import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Sensor } from '../../interfaces/sensor.interface';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id_sensor!: number;
  sensor: Sensor = { id:0, nombre:'Cargando...', puerto:'COM...', longitud: '0.000', latitud: '0.0000', imagen: 'No Found', estado: "Normal"};
  latitud!: number;
  longitud!: number;

  public hasLoaded: boolean = false;

  constructor( private route: Router,
    private activatedRoute: ActivatedRoute,
    private sensorService: ServicesService) {}

  ngOnInit() {
    this.id_sensor = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    console.log(this.id_sensor);
    this.sensorService.getById(this.id_sensor).subscribe(resp => {
      if(!resp) return;
      this.sensor = resp;
      this.latitud = Number.parseFloat(this.sensor.latitud.valueOf());
      this.longitud = Number.parseFloat(this.sensor.longitud.valueOf());
      console.log( this.latitud + "|||" + this.longitud);
    });
    setTimeout( () =>{
      this.hasLoaded = true;
    }, 5000 );
  }


  mapFirm(){
    this.route.navigateByUrl("https://firms.modaps.eosdis.nasa.gov/map/#d:today;@"+this.longitud+","+this.latitud+",10.9z")
  }
}
