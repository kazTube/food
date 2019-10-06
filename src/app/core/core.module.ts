import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';


import { HttpRequestInterceptor } from './httpInserptors/http-request.interceptors';
import { HttpResponseInterceptors } from './httpInserptors/http-response.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpResponseInterceptors,
      multi: true
    }
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CoreModule { }
