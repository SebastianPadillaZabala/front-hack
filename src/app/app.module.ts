import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { SensorComponent } from './pages/sensor/sensor.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    SensorComponent,
    LayoutPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
