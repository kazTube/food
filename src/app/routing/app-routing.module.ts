import { NgModule } from '@angular/core';
import { Routes, RouterModule, Router } from '@angular/router';
import { StateService } from '../core/service/state.service';
import { MobileRoutes } from './mobile-routes';
import { DesktopRoutes } from './desktop.routes';
import { HomeModule } from '../home/home/home.module';
import { SelectionFoodModule } from '../foot-selection/selection-food.module';
import { LoginModule } from '../login-register/login.module';

// const routes: Routes = [
//   {
//     path: '',
//     loadChildren: () => HomeModule,
//   },
//   {
//     path: 'selection',
//     loadChildren: () => SelectionFoodModule
//   },
//   {
//     path: 'login-register',
//     loadChildren: () => LoginModule
//   },
//   {
//     path: 'login',
//     loadChildren: () => LoginModule
//   }

// ];

@NgModule({
  imports: [
    RouterModule.forRoot([])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(private appState: StateService, private router: Router) {

    if (appState.isMobile()) {

      router.resetConfig(MobileRoutes.routes);

    } else {

      router.resetConfig(DesktopRoutes.routes);

    }
  }
}
