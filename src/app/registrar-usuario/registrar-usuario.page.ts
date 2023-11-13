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
    formData.append('usuario', this.usuario); 
    formData.append('contrasena', this.contrasena); 
  
    this.http.post('http://18.230.155.252:80/registrar_usuario', formData)
      .subscribe(response => {
        console.log(response);
        // Manejar la respuesta según tus necesidades
      });



  }

}
