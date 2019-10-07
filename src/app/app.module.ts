import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Libarary
import { DeviceDetectorModule } from 'ngx-device-detector';
import { AppRoutingModule } from './routing/app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home/home.module';
import { HomeMobileModule } from './home/home-mobile/home-mobile.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MatDialogeComponent } from './mat-dialoge/mat-dialoge.component';


@NgModule({
  declarations: [
    AppComponent,
    MatDialogeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    HomeMobileModule,
    CoreModule,
    MaterialModule,
    DeviceDetectorModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[MatDialogeComponent]
})
export class AppModule { }
