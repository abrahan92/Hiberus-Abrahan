import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  usuario = {
    nombre: 'Abrahan',
    email: 'mendozaabrahan@gmail.com'
  }

  menu: any = [
    {
      titulo: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' }
      ]
    }
  ]

  constructor( public router: Router, public _auths: AuthService ) { }

  ngOnInit() {
  }

  logout() {

    this._auths.logout();

  }

}
