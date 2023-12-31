import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';
import { SensorComponent } from './pages/sensor/sensor.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShowComponent } from './pages/show/show.component';
import { MapaPageComponent } from './pages/mapa-page/mapa-page.component';
import { ServicesService } from './services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { TestPageComponent } from './pages/test-page/test-page.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RegistrarComponent,
    SensorComponent,
    LayoutPageComponent,
    ShowComponent,
    MapaPageComponent,
    TestPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ ServicesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
