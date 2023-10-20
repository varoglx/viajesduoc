import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscr-viaje',
  templateUrl: './buscr-viaje.page.html',
  styleUrls: ['./buscr-viaje.page.scss'],
})
export class BuscrViajePage implements OnInit {
  driver: string = ''; 
  horario: string = '';
  costo: string = '';
  inicio: string = '';
  destino:string = '';

  
  

  ionViewWillEnter() {
    // Suponiendo que el nombre de usuario está almacenado en el localStorage por ahora
    this.driver = localStorage.getItem('conductor') || 'sinviajes';
    this.horario = localStorage.getItem('hora') || 'sinviajes';
    this.costo = localStorage.getItem('costo') || 'sinviajes';
    this.inicio = localStorage.getItem('inicio') || 'sinviajes';
    this.destino = localStorage.getItem('destino') || 'sinviajes';
  }


  constructor() { }

  onSearchChange(event:any){console.log(event);}
  ngOnInit() {
  }

}
