import { Injectable } from '@angular/core';
import {SQLite} from '@awesome-cordova-plugins/sqlite/ngx';


@Injectable({
  providedIn: 'root'
})
export class BaseDatosService {
  constructor(private sqlite: SQLite) { }

  this.sqlite.create({
    name:'data.db',
    location:'default'
  })

  
}
