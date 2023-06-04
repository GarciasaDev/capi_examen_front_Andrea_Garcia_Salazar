import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http'
import { enviroment } from '../../enviroments/enviroments'

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  URL = enviroment.URL;

  constructor(private http:HttpClient) { }

  getListUser(){
    return this.http.get(`${this.URL}/users`);
  }
}
