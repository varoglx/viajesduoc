import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  constructor(private http: HttpClient) { }

  usuario: string;
  contrasena: string;

  ngOnInit() {
  }
  registerUser() {
    console.log('usuario:', this.usuario);
    console.log('contrasena:', this.contrasena);
    const formData = new FormData();
    formData.append('usuario', this.usuario); // Reemplaza 'valor_usuario' con el valor real del usuario
    formData.append('contrasena', this.contrasena); // Reemplaza 'valor_contrasena' con el valor real de la contraseña
  
    const registerUrl = 'http://18.230.155.252:80/registrar_usuario/';
  
    this.http.post(registerUrl, formData).subscribe(
      (data) => {
        console.log('Respuesta del servidor:', data);
      },
      (error) => {
        console.error('Error en la solicitud:', error);
      }
    );
  }

}
