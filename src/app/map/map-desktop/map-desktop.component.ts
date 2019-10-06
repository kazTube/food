import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map-desktop',
  templateUrl: './map-desktop.component.html',
  styleUrls: ['./map-desktop.component.scss']
})
export class MapDesktopComponent implements OnInit {

  constructor(private router: Router) { }

  setCity(id:string){
    console.log(id);
    this.router.navigateByUrl('selection');
    
  }

  ngOnInit() {
  }

}
