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
    
  
    
  } 

}

