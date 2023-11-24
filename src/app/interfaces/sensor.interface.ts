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
  longitud: String;
  latitud: String;
  imagen: String;
  estado: String;
  data?: dato[]
}

export interface SensorNew {
  nombre: String;
  puerto: String;
  longitud: String;
  latitud: String;
  imagen: String;
}
