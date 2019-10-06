
import { HomeMobileModule } from '../home/home-mobile/home-mobile.module';

export class MobileRoutes {
    static routes = [
        {
        path:'',
        loadChildren:()=> HomeMobileModule
        }
    ]
}