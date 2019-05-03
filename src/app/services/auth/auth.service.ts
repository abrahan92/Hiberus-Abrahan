// src/app/auth/auth.service.ts
import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { URL_SERVICIO } from '../../config/config';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import Swap from 'sweetalert2';

@Injectable({
    providedIn: 'root'
  })
export class AuthService {

  username: string;
  token: string;

  constructor( public http: HttpClient, public router: Router ) {
    this.cargarStorage();
  }

  isLoggued() {
    return ( this.token.length > 5 ) ? true : false;
 }

  getToken(): string {
    return localStorage.getItem('token');
  }

  login( usuario: Usuario ) {

    let url = `${ URL_SERVICIO }/auth/login`;

    return this.http.post( url, usuario ).pipe(
      map( (resp: any) => {
        this.guardarStorage( resp.accessToken, resp.username );
        return true;
      })
    )

  }

  logout() {
    this.username = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('username');

    this.router.navigate(['/login']);
  }

  signUp( usuario: Usuario ) {

    let url = `${ URL_SERVICIO }/auth/register`;

    return this.http.post( url, usuario );

  }  

  guardarStorage( token: string, username: string ) {

    localStorage.setItem('token', token);
    localStorage.setItem('username', username);

    this.username = username;
    this.token = token;

 }

 cargarStorage() {

  if( localStorage.getItem('token') ) {
    this.token = localStorage.getItem('token');
    this.username = localStorage.getItem('username')
  } else {
    this.token = '';
    this.username = null;
  }

}
  
}