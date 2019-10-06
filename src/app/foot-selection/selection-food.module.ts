import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoorSelectionComponent } from './foor-selection/foor-selection.component';
import { Routes, RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: FoorSelectionComponent
  }
]

@NgModule({
  declarations: [
    FoorSelectionComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class SelectionFoodModule { }
