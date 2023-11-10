import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-registrar-usuario',
  templateUrl: './registrar-usuario.page.html',
  styleUrls: ['./registrar-usuario.page.scss'],
})
export class RegistrarUsuarioPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }
  registerUser() {
    const form = document.getElementById('registroForm') as HTMLFormElement;
    const formData = new FormData(form);
    console.log(formData.contrasena)

    
    const registerUrl = 'http://18.230.155.252:80/registrar_usuario/'; 
    console.log('enviado')
    fetch(registerUrl, {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor:', data);
      
    });
  }

}
