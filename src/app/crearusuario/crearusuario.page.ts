import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-crearusuario',
  templateUrl: './crearusuario.page.html',
  styleUrls: ['./crearusuario.page.scss'],
})
export class CrearusuarioPage implements OnInit {
  public getJsonValue:any;
  public postJsonValue:any;
  constructor(private http:HttpClient) { }

  ngOnInit() {
  }
  public getMethod(){
    this.http.get('https://g4f1a129007ecf6-zml8ml2yu22dc7g4.adb.sa-santiago-1.oraclecloudapps.com/o')
  }

}
