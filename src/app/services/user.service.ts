import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './uri.service'
@Injectable({
  providedIn: 'root'
})

export class UserService {
  public url : string;

  constructor(private _http: HttpClient) { 
    this.url = global.url;
  }

  register(usuario): Observable<any>{
    let params = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'/register', params ,{headers:headers});
  }

  acceder(usuario) : Observable<any>{
    let parametros = JSON.stringify(usuario);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'/login',parametros,{headers: headers});
  }
}
