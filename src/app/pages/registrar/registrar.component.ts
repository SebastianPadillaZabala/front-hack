import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  public myForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    puerto: ['',[Validators.required]],
    longitud: ['',[Validators.required]],
    latitud: ['',[Validators.required]],
    imagen: ['',[Validators.required]],
  });

  constructor( private fb: FormBuilder, private router: Router, ) {}

  onSubmit() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }

    let formulario = {
      nombre: this.myForm.value.nombre,
      puerto: this.myForm.value.puerto,
      longitud: this.myForm.value.longitud,
      latitud:this.myForm.value.latitud,
      imagen:this.myForm.value.imagen
    }

    console.log(formulario);
  }

  cancelar() {
    this.router.navigate(['/'])
  }
}
