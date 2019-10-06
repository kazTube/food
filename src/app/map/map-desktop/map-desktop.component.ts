import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from '../map.service';
import { ObserverService } from 'src/app/core/observer.service';

@Component({
  selector: 'app-map-desktop',
  templateUrl: './map-desktop.component.html',
  styleUrls: ['./map-desktop.component.scss']
})
export class MapDesktopComponent implements OnInit {

  constructor(private service: MapService, private router: Router, private observer: ObserverService) { }

  point(id: number) {
   this.observer.setStateId(id);
    this.service.getFoods(id).subscribe(
      r => {
        if (r) {

          this.observer.setFoods(r);
          this.router.navigateByUrl('selection');
        }
      }
    );
  }

  ngOnInit() {
  }

}
