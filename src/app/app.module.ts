import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Routes
import { APP_ROUTES } from './app.routes';

// Main Components
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';

// Pages Components
import { PagesComponent } from './pages/pages.component';

// Main Modules
import { PagesModule } from './pages/pages.module';

// Shared Module
import { SharedModule } from './shared/shared.module';

// Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Services
import { ServicesModule } from './services/service.module';

// Interceptor
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './services/auth/token.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    PagesModule,
    FormsModule,
    APP_ROUTES,
    SharedModule,
    ServicesModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
