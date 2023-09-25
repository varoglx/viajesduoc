import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUsuario: string = ''; // Aquí almacenaremos el nombre de usuario

  constructor() {}

  ionViewWillEnter() {
    // Suponiendo que el nombre de usuario está almacenado en el localStorage por ahora
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'Usuario';
  }

  programarViaje() {
    // Aquí la lógica para programar un viaje
    console.log('Programar un viaje');
  }

  buscarViaje() {
    // Aquí la lógica para buscar un viaje
    console.log('Buscar un viaje');
  }
}
