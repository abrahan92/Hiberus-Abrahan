import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent,
        data: { titulo: 'Login Hiberus' }
    },
    { 
        path: 'register', 
        component: RegisterComponent,
        data: { titulo: 'Registro Hiberus' }
     },
     { path: '**', component: NopagefoundComponent }
];

export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );