import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './service.index';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class ServicesModule { }
