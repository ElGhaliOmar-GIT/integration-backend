import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { Map, NavigationControl, Marker  } from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy {

  map: Map | undefined;
@ViewChild('map')
private mapContainer!: ElementRef<HTMLElement>;
  constructor() { }

  ngOnInit(): void {
  }
  
ngAfterViewInit() {
    const initialState = { lng:10.6405392 , lat: 35.8288175, zoom: 14 };

    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=Hdt0hjsW5ONIPhqayC6O`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom
    });
  }
  ngOnDestroy() {
    this.map?.remove();
}
}


