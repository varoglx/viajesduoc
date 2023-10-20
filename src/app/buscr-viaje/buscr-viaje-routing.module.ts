import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuscrViajePage } from './buscr-viaje.page';

const routes: Routes = [
  {
    path: '',
    component: BuscrViajePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuscrViajePageRoutingModule {}
