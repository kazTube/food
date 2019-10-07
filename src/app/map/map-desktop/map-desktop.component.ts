import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from '../map.service';
import { ObserverService } from 'src/app/core/observer.service';
import { RoutingService } from 'src/app/routing/routing.service';
import { DialogService } from 'src/app/core/dialog.service';

@Component({
  selector: 'app-map-desktop',
  templateUrl: './map-desktop.component.html',
  styleUrls: ['./map-desktop.component.scss']
})
export class MapDesktopComponent implements OnInit {
  foods: any[] = [];
  constructor(private service: MapService,
    private router: Router,
    private observer: ObserverService,
    private routeService: RoutingService,
    private dialogService: DialogService) { }

  point(id: number) {
    this.observer.setStateId(id);
    this.service.getFoods(id).subscribe(
      r => {
        this.routeService.setNavigat(true);
        if (r) {
          this.routeService.setNavigat(false);
          this.observer.setFoods(r);
          this.router.navigateByUrl('selection');
        } else {
          this.routeService.setNavigat(true);

        }
      }
    );
  }

  ngOnInit() {
    const guest_token = localStorage.getItem('guest_token');
    if (guest_token) {
      this.service.checkVotedBefore(guest_token).subscribe(
        r => {
          console.log(r);

          this.foods = r['data']['foods'];
          if (this.foods) {
            this.dialogService.openConfirmDialog('برای رای دادن به بیش از یک استان عضو شوید.');
          }
        }
      );
    }else {
      const token = localStorage.getItem('Token')
      this.service.checkVotedBefore(token).subscribe(
        r => {
          console.log(r);

          // this.foods = r['data']['foods'];
          // if (this.foods) {
          //   this.dialogService.openConfirmDialog('برای رای دادن به بیش از یک استان عضو شوید.');
          // }
        }
      );
    }
  }
}
