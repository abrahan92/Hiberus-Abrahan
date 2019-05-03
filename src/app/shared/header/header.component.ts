import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

  usuario = {
    nombre: 'Abrahan',
    email: 'mendozaabrahan@gmail.com'
  }

  titulo: string = 'Titulo';

  constructor( private router: Router, private title: Title, private meta: Meta, public _auths: AuthService ) {
      
    this.getDataRoute().subscribe( ( data: { titulo: string }) => {
      this.titulo = data.titulo;
      this.title.setTitle(data.titulo);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.titulo
      }
      
      this.meta.updateTag(metaTag);
      
    });
    
 }
  ngOnInit() {
  }

  buscar( termino: string ) {

  }

  getDataRoute(): Observable<any> {

    return this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd ),
      filter( ( evento: ActivationEnd ) => evento.snapshot.firstChild === null ),
      map( (evento: ActivationEnd) => evento.snapshot.data)
    )
  }

  logout() {

    this._auths.logout();

  }

}
