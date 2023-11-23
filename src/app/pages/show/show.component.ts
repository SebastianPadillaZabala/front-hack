import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent {
  formulario = {
    nombre: "Sensor Robore",
    puerto: "COM4",
    longitud: -63.169433,
    latitud: -17.791425,
    imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1PHLW3SvjhDKQdwWx2jlg2ptffMq8ssqnX41e0umJlbcRKZAgEvb3j9VGSt7ADHkbJCY&usqp=CAU"
  }

  constructor( private route: Router) {}

  mapFirm(){
    this.route.navigateByUrl("https://firms.modaps.eosdis.nasa.gov/map/#d:today;@"+this.formulario.longitud+","+this.formulario.latitud+",10.9z")
  }
}
