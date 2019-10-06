import { HomeComponent } from '../home/home/home.component';
import { HomeModule } from '../home/home/home.module';
import { SelectionFoodModule } from '../foot-selection/selection-food.module';

export class DesktopRoutes {
    static routes = [
        {
            path: '',
            loadChildren: () => HomeModule
        },
        {
            path: 'selection',
            loadChildren: () => SelectionFoodModule
        }
    ]
}