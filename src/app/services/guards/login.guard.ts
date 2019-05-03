import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate  {

  constructor( public _auths: AuthService, public router: Router ) {}

  canActivate() {
    
    if( this._auths.isLoggued() ) {
      return true;
    }else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
