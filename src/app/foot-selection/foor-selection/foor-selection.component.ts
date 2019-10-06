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
  foods: FoodDTO[] = [
    { "foodName": "Chicken Burrito", "foodType": "Burrito", "protein": "chicken", "calories": 975 },
    { "foodName": "Steak Burrito", "foodType": "Burrito", "protein": "steak", "calories": 945 },
    { "foodName": "Carnitas Burrito", "foodType": "Burrito", "protein": "carnitas", "calories": 1005 },
    { "foodName": "Barbacoa Burrito", "foodType": "Burrito", "protein": "barbacoa", "calories": 965 },
    { "foodName": "Chorizo Burrito", "foodType": "Burrito", "protein": "chorizo", "calories": 1095 },
    { "foodName": "Sofritas Burrito", "foodType": "Burrito", "protein": "sofritas", "calories": 945 },
    { "foodName": "Chicken Corn Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 650 },
    { "foodName": "Chicken Flour Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 700 },
    { "foodName": "Steak Corn Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 620 },
    { "foodName": "Steak Flour Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 670 },
    { "foodName": "Carnitas Corn Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 680 },
    { "foodName": "Carnitas Flour Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 730 },
    { "foodName": "Barbacoa Corn Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 640 },
    { "foodName": "Barbacoa Flour Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 690 },
    { "foodName": "Chorizo Corn Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 770 },
    { "foodName": "Chorizo Flour Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 820 },
    { "foodName": "Sofritas Corn Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 620 },
    { "foodName": "Sofritas Flour Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 670 },
    { "foodName": "Chicken Burrito", "foodType": "Burrito", "protein": "chicken", "calories": 975 },
    { "foodName": "Steak Burrito", "foodType": "Burrito", "protein": "steak", "calories": 945 },
    { "foodName": "Carnitas Burrito", "foodType": "Burrito", "protein": "carnitas", "calories": 1005 },
    { "foodName": "Barbacoa Burrito", "foodType": "Burrito", "protein": "barbacoa", "calories": 965 },
    { "foodName": "Chorizo Burrito", "foodType": "Burrito", "protein": "chorizo", "calories": 1095 },
    { "foodName": "Sofritas Burrito", "foodType": "Burrito", "protein": "sofritas", "calories": 945 },
    { "foodName": "Chicken Corn Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 650 },
    { "foodName": "Chicken Flour Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 700 },
    { "foodName": "Steak Corn Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 620 },
    { "foodName": "Steak Flour Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 670 },
    { "foodName": "Carnitas Corn Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 680 },
    { "foodName": "Carnitas Flour Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 730 },
    { "foodName": "Barbacoa Corn Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 640 },
    { "foodName": "Barbacoa Flour Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 690 },
    { "foodName": "Chorizo Corn Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 770 },
    { "foodName": "Chorizo Flour Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 820 },
    { "foodName": "Sofritas Corn Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 620 },
    { "foodName": "Sofritas Flour Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 670 },
    { "foodName": "Chicken Burrito", "foodType": "Burrito", "protein": "chicken", "calories": 975 },
    { "foodName": "Steak Burrito", "foodType": "Burrito", "protein": "steak", "calories": 945 },
    { "foodName": "Carnitas Burrito", "foodType": "Burrito", "protein": "carnitas", "calories": 1005 },
    { "foodName": "Barbacoa Burrito", "foodType": "Burrito", "protein": "barbacoa", "calories": 965 },
    { "foodName": "Chorizo Burrito", "foodType": "Burrito", "protein": "chorizo", "calories": 1095 },
    { "foodName": "Sofritas Burrito", "foodType": "Burrito", "protein": "sofritas", "calories": 945 },
    { "foodName": "Chicken Corn Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 650 },
    { "foodName": "Chicken Flour Tortilla Taco", "foodType": "Taco", "protein": "chicken", "calories": 700 },
    { "foodName": "Steak Corn Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 620 },
    { "foodName": "Steak Flour Tortilla Taco", "foodType": "Taco", "protein": "steak", "calories": 670 },
    { "foodName": "Carnitas Corn Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 680 },
    { "foodName": "Carnitas Flour Tortilla Taco", "foodType": "Taco", "protein": "carnitas", "calories": 730 },
    { "foodName": "Barbacoa Corn Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 640 },
    { "foodName": "Barbacoa Flour Tortilla Taco", "foodType": "Taco", "protein": "barbacoa", "calories": 690 },
    { "foodName": "Chorizo Corn Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 770 },
    { "foodName": "Chorizo Flour Tortilla Taco", "foodType": "Taco", "protein": "chorizo", "calories": 820 },
    { "foodName": "Sofritas Corn Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 620 },
    { "foodName": "Sofritas Flour Tortilla Taco", "foodType": "Taco", "protein": "sofritas", "calories": 670 },

  ]
  nextPosition: number = 0;
  checkedCTRL: boolean;
  counter = 0;
  constructor(public viewContainerRef: ViewContainerRef, public overlay: Overlay, private router: Router) { }


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

  openRotiniPanel() {

    let config = new OverlayConfig();

    config.positionStrategy = this.overlay.position()
      .global()
      .left(`${this.nextPosition}px`)
      .top(`${this.nextPosition}px`);

    this.nextPosition += 30;

    config.hasBackdrop = true;

    let overlayRef = this.overlay.create(config);

    overlayRef.backdropClick().subscribe(() => {
      overlayRef.dispose();
    });

    overlayRef.attach(new ComponentPortal(RotiniPanel, this.viewContainerRef));
  }
  ngOnInit() {
  }

}
export class RotiniPanel {
  value: number = 9000;
}