import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor( private route: Router) {}

  redirigir(direccion: String){
    switch (direccion){
      case 'inicio': {
        this.route.navigate(['/']);
        break;
      }
      case 'registrar': {
        this.route.navigate(['/registrar-sensor']);
        break;
      }
      default: {
        break;
      }

    }

  }

}
