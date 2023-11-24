import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { Sensor, SensorNew } from '../../interfaces/sensor.interface';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit{

  sensor!: SensorNew;
  public myForm: FormGroup = this.fb.group({
    nombre: ['',[Validators.required]],
    puerto: ['',[Validators.required]],
    longitud: [0,[Validators.required]],
    latitud: [0,[Validators.required]],
    imagen: ['',[Validators.required]],
  });

  constructor( private fb: FormBuilder,
    private router: Router,
    private sensorService: ServicesService,
    private snackbar: MatSnackBar,
  ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if(this.myForm.invalid) {
      this.myForm.markAllAsTouched();
    }

    const nombre:String = this.myForm.value.nombre;
    const puerto: String = this.myForm.value.puerto;
    const longitud: String = this.myForm.value.longitud;
    const latitud: String = this.myForm.value.latitud;
    const imagen: String = this.myForm.value.imagen;
    this.sensor = {nombre,puerto, longitud, latitud, imagen}

    this.sensorService.create(this.sensor).subscribe( resp => {
      if(!resp) return this.showSnackbar('No se pudo guardar los datos');
      this.showSnackbar('Se guardaron los datos');
      this.router.navigate(['/']);
    });

  }

  showSnackbar(message: string) {
    this.snackbar.open(message, 'Entendido!', {
      duration: 2500,
    });
  }

  cancelar() {
    this.router.navigate(['/'])
  }
}
