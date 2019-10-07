import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { FoodDTO } from '../../DTO/foodDTO';
import { Router } from '@angular/router';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';

import {
  ComponentPortal,
  // This import is only used to define a generic type. The current TypeScript version incorrectly
  // considers such imports as unused (https://github.com/Microsoft/TypeScript/issues/14953)
  // tslint:disable-next-line:no-unused-variable
  Portal,
  TemplatePortalDirective
} from '@angular/cdk/portal';
import { ObserverService } from 'src/app/core/observer.service';
import { SelectionFoodService } from '../selection-food.service';
import { RoutingService } from 'src/app/routing/routing.service';

@Component({
  selector: 'app-foor-selection',
  templateUrl: './foor-selection.component.html',
  styleUrls: ['./foor-selection.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FoorSelectionComponent implements OnInit {
  selectedFood: any[] = [];
  isDisable: boolean = false;
  checked: any[] = [];
  checkedNumber: number = 0;
  limitChecked = 3;
  foods: FoodDTO;
  nextPosition: number = 0;
  checkedCTRL: boolean;
  counter = 0;
  constructor(public viewContainerRef: ViewContainerRef, public overlay: Overlay,
    private router: Router, private observer: ObserverService, private service: SelectionFoodService,
    private routeService: RoutingService) { }


  select(calories: number, event) {
    if (event.target.checked) {
      this.checkedCTRL = true;
      if (this.counter < 3) {
        this.selectedFood.push(calories);
        this.counter++;
      } else {
        this.checkedCTRL = event.target.checked = false;
      }
    } else {
      event.target.checked = false;
      var index = this.selectedFood.indexOf(calories)
      this.checkedNumber--;
      if (index > -1) {
        this.selectedFood.splice(index, 1);
      }
      this.checkedCTRL = false;
      this.counter--;
    }

  }

  submit() {
    this.observer.stateId.subscribe(
      r => {
        this.service.setVote(r, this.selectedFood).subscribe(
          r => {
            this.routeService.setNavigat(true);
            if (r) {
              this.routeService.setNavigat(false);

              console.log(r);

            } else {
              this.routeService.setNavigat(true);
            }
          }
        );
      }
    );
  }


  ngOnInit() {
    this.observer.stateFoods.subscribe(
      r => {
        this.routeService.setNavigat(true);
        if (r) {
          this.routeService.setNavigat(false);
          this.foods = r['data'];
        } else {
          this.routeService.setNavigat(true);
        }
      }
    );
  }

}
export class RotiniPanel {
  value: number = 9000;
}