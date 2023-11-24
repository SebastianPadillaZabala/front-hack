import { Component, Input, OnInit } from '@angular/core';
import { Sensor } from 'src/app/interfaces/sensor.interface';
import { io } from 'socket.io-client';

export interface Data {
  id?: number;
  fecha: string;
  hora: string;
  valor: string;
  sensor_id: number;
}

@Component({
  selector: 'shared-card-sensores',
  templateUrl: './card-sensores.component.html',
  styleUrls: ['./card-sensores.component.css']
})
export class CardSensoresComponent implements OnInit {

  @Input()
  sensor!: Sensor;

  @Input()
  ppm!: Data;

  longitud!: number;
  latitud!: number;
  valor_ppm: string = '000';
  valor_temp: string = '000°';
  color!: string;
  color_temp!: string;
  estado!: string;

  public hasLoaded: boolean = false;
  private socket: any;

  constructor() { }

  ngOnInit(): void {
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
    });
    this.longitud = Number.parseFloat(this.sensor.longitud.valueOf());
    this.latitud = Number.parseFloat(this.sensor.latitud.valueOf());
    setTimeout(() => {
      this.hasLoaded = true;
    }, 5000);
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
