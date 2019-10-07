import { Component } from '@angular/core';
import { StartService } from './start.service';
import { RoutingService } from './routing/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food';
  isNavigation: boolean;
  constructor(private service: StartService, private routeService: RoutingService) {
    if (!localStorage.getItem('generalId')) {
      this.service.getToken().subscribe(
        r => {
          localStorage.setItem('Token', r['guest_token']);

        }
      );



      this.routeService.isNavigate.subscribe(
        r => {
          if (r) {
            this.isNavigation = r
          }
        }
      );
    }
  }
}
