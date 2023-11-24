import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Sensor, dato } from '../../interfaces/sensor.interface';
import { io } from 'socket.io-client';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  id_sensor!: number;
  sensor: Sensor = { id: 0, nombre: 'Cargando...', puerto: 'COM...', longitud: '0.000', latitud: '0.0000', imagen: 'No Found', estado: "Normal" };
  latitud!: number;
  longitud!: number;
  mapa!: string;
  private socket: any;
  valor_ppm: string = '000';
  valor_temp: string = '000°';
  color!: string;
  color_temp!: string;
  estado!: string;
  alert: boolean = false;
  public hasLoaded: boolean = false;

  constructor(
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private sensorService: ServicesService
  ) { }

  ngOnInit() {
    this.id_sensor = Number.parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    console.log(this.id_sensor);
    this.sensorService.getById(this.id_sensor).subscribe(resp => {
      if (!resp) return;
      console.table(resp);
      this.sensor = resp;
      this.latitud = Number.parseFloat(this.sensor.latitud.valueOf());
      this.longitud = Number.parseFloat(this.sensor.longitud.valueOf());
      this.hasLoaded = true;
      this.mapa = 'https://firms.modaps.eosdis.nasa.gov/map/#d:today;@' + this.sensor.longitud.valueOf() + ',' + this.sensor.latitud.valueOf() + ',10.9z';
    });
    this.socket = io('http://localhost:3000');
    this.socket.on('new-data', (data: any) => {
      if (data.sensor_id != this.sensor.id) return;
      console.log('Mensaje del servidor:', data);
      this.valor_ppm = data.valor + " ";
      this.valor_temp = this.tempHandler(data.valor) + '';
      this.colorHandler(data.valor);
      this.colorTempHandler(this.valor_temp);
      this.valor_temp += '°';
      this.estado = this.estadoHandler(data.valor);
      if (!this.alert)
        this.alert = +data.valor > 300 && data.sensor_id == 1;
    });
  }

  colorHandler(ppm: string) {
    const ppm_number: number = +ppm;
    if (ppm_number < 100) return this.color = 'bg-green-500 text-white'
    if (ppm_number >= 100 && ppm_number <= 200) return this.color = 'bg-yellow-500 text-white';
    if (ppm_number >= 200 && ppm_number <= 300) return this.color = 'bg-orange-500 text-white';
    this.color = 'bg-red-500 text-white';
    return;
  }

  colorTempHandler(temp: string) {
    const ppm_number: number = +temp;
    if (ppm_number < 100) return this.color_temp = 'bg-green-500 text-white'
    if (ppm_number >= 100 && ppm_number <= 200) return this.color_temp = 'bg-yellow-500 text-white';
    if (ppm_number >= 200 && ppm_number <= 300) return this.color_temp = 'bg-orange-500 text-white';
    this.color_temp = 'bg-red-500 text-white';
    return;
  }

  tempHandler(ppm: string) {
    const ppm_number: number = +ppm;
    if (ppm_number < 100) return this.randNumber(1, 25);
    if (ppm_number >= 100 && ppm_number <= 200) return this.randNumber(25, 50);
    if (ppm_number >= 200 && ppm_number <= 300) return this.randNumber(50, 75);
    if (ppm_number > 300) return this.randNumber(75, 100);
    return '0';
  }

  randNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  estadoHandler(ppm: string) {
    const ppm_number: number = +ppm;
    if (ppm_number < 100) return 'Normal';
    if (ppm_number >= 100 && ppm_number <= 200) return 'Moderado';
    if (ppm_number >= 200 && ppm_number <= 300) return 'Riesgo';
    if (ppm_number > 300) return 'Peligro';
    return '0';
  }

}
