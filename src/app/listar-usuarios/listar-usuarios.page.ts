import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.page.html',
  styleUrls: ['./listar-usuarios.page.scss'],
})
export class ListarUsuariosPage implements OnInit {
  formData: { nombre: string; contrasenna: string } = {
    nombre: '',
    contrasenna: '',
  };
  jsonData: any[];
  constructor(private http: HttpClient) { }
  ngOnInit() {
    const url = 'http://localhost:5000/get_data_usuarios'; // Reemplaza esto con la URL real de tu JSON
  
    this.http.get(url).subscribe((data: any) => {
      console.log('Datos JSON:', data);
      this.jsonData = data;

      // Aquí puedes realizar cualquier procesamiento adicional que necesites con los datos.
    });
  }
    submitForm() {
    // Realizar una solicitud POST con HttpClient
    const url = 'URL_de_tu_servidor';
    this.http.post(url, this.formData).subscribe((response) => {
      console.log('Respuesta del servidor:', response);
    });
  }

}

