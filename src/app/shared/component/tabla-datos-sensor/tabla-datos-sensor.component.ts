import { Component, Input } from '@angular/core';

interface Dato {
  id: number;
  valor: string;
}

@Component({
  selector: 'shared-tabla-datos-sensor',
  templateUrl: './tabla-datos-sensor.component.html',
  styleUrls: ['./tabla-datos-sensor.component.css']
})
export class TablaDatosSensorComponent {
  @Input()
  id!:BigInteger;
  datos: Dato[] = [];

  // Simulación de datos del backend
  nuevoDatoDelBackend() {
    const nuevoDato: Dato = {
      id: this.datos.length + 1,
      valor: `Dato ${this.datos.length + 1}`
    };

    this.datos.unshift(nuevoDato); // Agrega el nuevo dato al principio del array

    if (this.datos.length > 10) {
      this.datos.pop(); // Elimina el dato más antiguo si hay más de 10
    }
  }

}