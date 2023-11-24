import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {



  constructor(
    private router: Router, 
    private authService: AuthService,
    private http: HttpClient
  ) {}
  usuario: string;
  contrasena: string;
  resetPassword() {
    // Por ahora, simplemente redirige al usuario a la página de restablecimiento de contraseña
    this.router.navigate(['/reset-password']);
  }
  Ingresar() {
    const loggedIn = this.authService.login(this.usuario, this.contrasena);
    console.log('usuario:', this.usuario);
    console.log('contrasena:', this.contrasena);
    const formData = new FormData();
    formData.append('usuario', this.usuario); 
    formData.append('contrasena', this.contrasena); 
  
    this.http.post('http://18.231.154.125/login', formData)
      .subscribe(response => {
        console.log(response);
        if (response === true) {
          // Realizar acciones específicas si la respuesta es True
          this.router.navigate(['/home']);
        }
      });



  }
}
