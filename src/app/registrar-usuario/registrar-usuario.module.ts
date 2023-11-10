import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { RegistrarUsuarioPageRoutingModule } from './registrar-usuario-routing.module';

import { RegistrarUsuarioPage } from './registrar-usuario.page';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    IonicModule,
    RegistrarUsuarioPageRoutingModule
  ],
  declarations: [RegistrarUsuarioPage]
})
export class RegistrarUsuarioPageModule {}
