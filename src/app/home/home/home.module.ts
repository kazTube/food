import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { MapDesktopComponent } from 'src/app/map/map-desktop/map-desktop.component';
import { MapMobileComponent } from 'src/app/map/map-mobile/map-mobile.component';
const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    MapDesktopComponent,
    MapMobileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)

  ]
})
export class HomeModule { }
