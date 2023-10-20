import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(username: string, password: string): boolean {

    localStorage.setItem('nombreUsuario', username);
    return true;
  }
  resetPassword(username: string): boolean {
    // Lógica para restablecer la contraseña. En un caso real, comunicarías con una API.
    // Por ahora, asumiremos que cualquier intento es exitoso.
    return true;
  }
  
}

