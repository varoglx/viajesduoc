import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuscrViajePageRoutingModule } from './buscr-viaje-routing.module';

import { BuscrViajePage } from './buscr-viaje.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuscrViajePageRoutingModule
  ],
  declarations: [BuscrViajePage]
})
export class BuscrViajePageModule {}
