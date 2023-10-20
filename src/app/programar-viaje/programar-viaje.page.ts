import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programar-viaje',
  templateUrl: './programar-viaje.page.html',
  styleUrls: ['./programar-viaje.page.scss'],
})
export class ProgramarViajePage implements OnInit {
  public hora: string = '';  // Variable para almacenar el nombre de usuario ingresado
  public costo: number = 0;
  public costoPorPersona: number = 0; 
  public inicio: string = '';
  public destino: string = '';
  public mensaje: string = '';
  constructor() {
    this.costoPorPersona = 0;
    this.hora='';
    this.costo=0;
    this.inicio='';
    this.destino='';
    this.mensaje = '';

   }

  ngOnInit() {
  }

  calcularPrecio(){
    this.costoPorPersona= (this.costo/4)
    localStorage.setItem('costo', this.costoPorPersona.toString());
    localStorage.setItem('hora', this.hora);
    localStorage.setItem('conductor',localStorage.getItem('nombreUsuario'))
    localStorage.setItem('inicio',this.inicio)
    localStorage.setItem('destino',this.destino)
    this.mensaje='Viaje Creado Correctamente'


  }

  cancelar(){
    localStorage.setItem('costo', 'Sin Viajes');
    localStorage.setItem('hora', 'Sin Viajes');
    localStorage.setItem('conductor','Sin viajes')
    localStorage.setItem('inicio','Sin viajes')
    localStorage.setItem('destino','Sin viajes')
    this.mensaje='Viaje eliminado Correctamente'

  }

}
