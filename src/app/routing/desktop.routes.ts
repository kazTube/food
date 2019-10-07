import { HomeComponent } from '../home/home/home.component';
import { HomeModule } from '../home/home/home.module';
import { SelectionFoodModule } from '../foot-selection/selection-food.module';
import { LoginModule } from '../login-register/login.module';

export class DesktopRoutes {
    static routes = [
        {
            path: '',
            loadChildren: () => HomeModule
        },
        {
            path: 'selection',
            loadChildren: () => SelectionFoodModule
        },
        {
            path: 'login-register',
            loadChildren: () => LoginModule
        }
    ]
}