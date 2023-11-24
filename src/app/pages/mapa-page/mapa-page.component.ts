///<reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>

import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core'
import { Router } from '@angular/router';


@Component({
  selector: 'app-mapa-page',
  templateUrl: './mapa-page.component.html',
  styleUrls: ['./mapa-page.component.css']
})
export class MapaPageComponent implements OnInit{

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!: google.maps.Map;
  markers: google.maps.Marker[];


  constructor(private renderer: Renderer2, private route : Router) {
    this.markers = [];
  }


  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

    const opciones = {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    }

    this.cargarMapa();
  };

  cargarMapa(): any {
    const opciones = {
      center: new google.maps.LatLng({lat: -17.773052, lng:-63.191549}),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapa = new google.maps.Map(this.renderer.selectRootElement(this.divMap.nativeElement), opciones)

    const image = "assets/img/loc.png"
    const marker1 = new google.maps.Marker({
      position: {lat: -17.776161, lng:-63.195033},
      title: "Shadow garden",
      icon: {
        url: image,
        scaledSize: new google.maps.Size(60, 60) // ajusta el tamaño del icono según sea necesario
      }
    });
    marker1.setMap(this.mapa);
    this.markers.push(marker1);
    marker1.addListener("click", () => {
      this.route.navigate(['/show-sensor/1']);
    });


    const marker2 = new google.maps.Marker({
      position: {lat: -17.768938, lng:-63.196214},
      title: "Shadow garden",
      icon: {
        url: image,
        scaledSize: new google.maps.Size(60, 60) // ajusta el tamaño del icono según sea necesario
      }
    });
    marker2.setMap(this.mapa);
    marker2.addListener("click", () => {
      this.route.navigate(['/show-sensor/1']);
    });



    const marker3 = new google.maps.Marker({
      position: {lat: -17.773793, lng:-63.185137},
      title: "Shadow garden",
      icon: {
        url: image,
        scaledSize: new google.maps.Size(60, 60) // ajusta el tamaño del icono según sea necesario
      }
    });
    marker3.setMap(this.mapa);
    marker3.addListener("click", () => {
      this.route.navigate(['/show-sensor/1']);
    });



    const circle1 = new google.maps.Circle({
      map: this.mapa,
      center:{lat: -17.776161, lng:-63.195033},
      radius: 400, // en metros
      strokeColor: '#FF0000', // color del borde
      strokeOpacity: 0.8, // opacidad del borde
      strokeWeight: 2, // grosor del borde
      fillColor: '#FF0000', // color del relleno
      fillOpacity: 0.35 // opacidad del relleno
    });
    circle1.bindTo('center', marker1, 'position');


    const circle2 = new google.maps.Circle({
      map: this.mapa,
      center: {lat: -17.768938, lng:-63.196214},
      radius: 410, // en metros
      strokeColor: '#00BF63', // color del borde
      strokeOpacity: 0.8, // opacidad del borde
      strokeWeight: 2, // grosor del borde
      fillColor: '#C1FF72', // color del relleno
      fillOpacity: 0.35 // opacidad del relleno
    });
    circle2.bindTo('center', marker2, 'position');

    const circle3 = new google.maps.Circle({
      map: this.mapa,
      center: {lat: -17.773793, lng:-63.185137},
      radius: 450, // en metros
      strokeColor: '#E57D1C', // color del borde
      strokeOpacity: 0.8, // opacidad del borde
      strokeWeight: 2, // grosor del borde
      fillColor: '#FEC731', // color del relleno
      fillOpacity: 0.35 // opacidad del relleno
    });
    circle3.bindTo('center', marker3, 'position');

  };



}
