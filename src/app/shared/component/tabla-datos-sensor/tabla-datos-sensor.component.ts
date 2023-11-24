import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { dato } from 'src/app/interfaces/sensor.interface';
import { ServicesService } from 'src/app/services/services.service';



@Component({
  selector: 'shared-tabla-datos-sensor',
  templateUrl: './tabla-datos-sensor.component.html',
  styleUrls: ['./tabla-datos-sensor.component.css']
})
export class TablaDatosSensorComponent implements OnInit {
  @Input()
  sensor_id!: number;
  estado1: boolean = true;
  estado2: boolean = false;
  datos!: dato[];

  constructor(
    private sensorService: ServicesService
  ) { }

  ngOnInit(): void {
    this.sensorService.getById(this.sensor_id || 1).subscribe(resp => {
      if (!resp) return;
      this.datos = resp.data || [];
    });
  }

}
