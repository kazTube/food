import { Component, OnInit } from '@angular/core';
import { StartService } from './start.service';
import { RoutingService } from './routing/routing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'food';
  isNavigation: boolean;
  constructor(private service: StartService, private routeService: RoutingService) {

  }
  ngOnInit() {
    if (!localStorage.getItem('Token') && !localStorage.getItem('guest_token')) {
      console.log('new token');


      this.service.getToken().subscribe(
        r => {
          localStorage.setItem('guest_token', r['guest_token']);

        }
      );
      this.routeService.isNavigate.subscribe(
        r => {
          if (r) {
            this.isNavigation = r
          }
        }
      );



    } else {
      console.log('not new');

    }
  }
}
