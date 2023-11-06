import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  public username: string = '';  // Variable para almacenar el nombre de usuario ingresado
  public password: string = '';  // Variable para almacenar la contraseña ingresada

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}
  resetPassword() {
    // Por ahora, simplemente redirige al usuario a la página de restablecimiento de contraseña
    this.router.navigate(['/reset-password']);
  }
  Ingresar() {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      this.router.navigate(['/home']);
    } else {
      // Mostrar un mensaje de error o hacer algo cuando el inicio de sesión falla
    }
  }
}
