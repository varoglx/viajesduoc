import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonInput, IonInputEvent } from '@ionic/angular';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {

  constructor() { }

  recuperar(){
    const myVariable = 'This is my variable';

  }
  ngOnInit() {
  }

}
