import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Sensor, SensorNew } from '../interfaces/sensor.interface';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private baseUrl: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Sensor[]> {
    return this.http.get<Sensor[]>(`${this.baseUrl}sensor`)
      .pipe(catchError(err => of([])));
  }

  getById(id: number): Observable<Sensor | undefined> {
    return this.http.get<Sensor>(`${this.baseUrl}sensor/${id}`)
    .pipe(
      catchError(err => of(undefined))
    );
  }

  create(sensor: SensorNew): Observable<Sensor| undefined> {
    return this.http.post<Sensor>(`${this.baseUrl}sensor`, sensor)
      .pipe(catchError(err => of(undefined)));
  }
}
