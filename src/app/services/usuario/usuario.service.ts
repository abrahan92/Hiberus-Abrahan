import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIO } from 'src/app/config/config';
import { map } from 'rxjs/operators';
import { Usuario } from 'src/app/models/usuario.model';

@Injectable({
    providedIn: 'root'
  })
export class UsuarioService {

    username: string;
    token: string;
    
    constructor( public http: HttpClient, public router: Router ) { }

    cargarUsuarios() {

        let url = `${ URL_SERVICIO }/users`;

        return this.http.get( url ).pipe(
            map( (resp: any) => {
              return resp;
            })
          )

    }

    borrarUsuario( id: string ){

      let url = `${ URL_SERVICIO }/users/${ id }`;

      return this.http.delete(url);

    }

}