import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';
import { AuthService } from '../../services/auth/auth.service';

declare function init_plugins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;
  username: string;

  constructor( public router: Router, public _auths: AuthService ) {
    this.token = localStorage.getItem('token');
    this.enviarAlInicio(this.token);
   }

  ngOnInit() {
    init_plugins();
  }

  ingresar( forma: NgForm ) {
    
    if( forma.invalid ) {
      return;
    }

    let usuario = new Usuario(null, forma.value.username, forma.value.password );
    
    this._auths.login(usuario).subscribe( resp => {
      this.router.navigate(['/usuarios']);
    });
           
  }

  enviarAlInicio( token: string ) {
    
    if( token && token.length > 0 ){
      this.router.navigate(['/usuarios']);
    }else{
      this.router.navigate(['/login']);
    }

  }

}
