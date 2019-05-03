import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { PagesComponent } from './pages.component';
import { LoginGuard } from '../services/guards/login.guard';

const pagesRoutes: Routes = [
    { 
        path: "",
        component: PagesComponent,
        canActivate: [ LoginGuard ],
        children: [ 
            { path: 'usuarios', component: UsuariosComponent, data: { titulo: 'Usuarios Hiberus' } },
            { path: '', redirectTo: '/usuarios', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);