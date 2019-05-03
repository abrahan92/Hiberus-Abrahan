import { NgModule } from '@angular/core';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [ 
        CommonModule,
        SharedModule,
        PAGES_ROUTES
    ],
    declarations: [
        PagesComponent,
        UsuariosComponent
    ],
    exports: [ 
        PagesComponent
     ]
})
export class PagesModule { }