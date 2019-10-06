import { Component } from '@angular/core';
import { StartService } from './start.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'food';
  constructor(private service: StartService) {
    console.log('hello');
    
    if(!localStorage.getItem('generalId')) {
      this.service.getToken().subscribe(
        r => {
          console.log(r);
          localStorage.setItem('Token',r['guest_token']);
          
        }
      );
    }else {
      console.log('goodbye');
      
    }
  }
}
