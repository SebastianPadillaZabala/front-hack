///<reference path="../../../../../node_modules/@types/googlemaps/index.d.ts"/>

import { Component, OnInit, Input } from '@angular/core';
import { ElementRef, ViewChild, Renderer2 } from '@angular/core'

@Component({
  selector: 'shared-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.css']

})

export class MapaComponent implements OnInit{

  @Input()
  alto!: String;
  @Input()
  ancho!: String;
  @Input()
  latitud!: number;
  @Input()
  longitud!: number;

  @ViewChild('divMap') divMap!: ElementRef;
  @ViewChild('inputPlaces') inputPlaces!: ElementRef;

  mapa!: google.maps.Map;
  markers: google.maps.Marker[];


  constructor(private renderer: Renderer2) {
    this.markers = [];
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.cargarMapa({ lat: this.latitud, lng: this.longitud });
  };

  cargarMapa(position: any): any {
    const opciones = {
      center: new google.maps.LatLng(position),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.mapa = new google.maps.Map(this.renderer.selectRootElement(this.divMap.nativeElement), opciones)

    const markerPosition = new google.maps.Marker({
      position: position,
      title: "Shadow garden",
    });

    markerPosition.setMap(this.mapa);
    this.markers.push(markerPosition);

  };



}
