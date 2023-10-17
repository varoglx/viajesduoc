import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  nombreUsuario: string = ''; // Aquí almacenaremos el nombre de usuario

  
  

  ionViewWillEnter() {
    // Suponiendo que el nombre de usuario está almacenado en el localStorage por ahora
    this.nombreUsuario = localStorage.getItem('nombreUsuario') || 'Usuario';
  }

  programarViaje() {
    // Aquí la lógica para programar un viaje
    this.router.navigate(['/programarViaje']);
  }

  buscarViaje() {
    // Aquí la lógica para buscar un viaje
    console.log('Buscar un viaje');
  }
  rutaProgramarViaje(){
    
  }
  constructor(private router: Router) {}
}
