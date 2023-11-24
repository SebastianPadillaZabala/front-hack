export interface dato {
  id: number;
  sensor_id: number;
  fecha: String;
  hora: String;
  valor: number;
}
export interface Sensor {
  id: number;
  nombre: String;
  puerto: String;
  longitud: number;
  latitud: number;
  imagen: String;
  estado: String;
  data: dato[]
}
