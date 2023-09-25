import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router'; // Importa Router
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  public username: string = ''; // Variable para almacenar el nombre de usuario ingresado
  

  constructor(
    private router: Router, 
    private authService: AuthService
  ) {}

  ngOnInit() {
  }
  resetPassword() {
    
  const resetSuccessful = this.authService.resetPassword(this.username);
  if (resetSuccessful) {
    // Navegar de regreso a la página de inicio de sesión o mostrar un mensaje de éxito.
    this.router.navigate(['/login']);
  } else {
    // Mostrar un mensaje de error o hacer algo cuando el restablecimiento falla.
  }

}
}
