import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoorSelectionComponent } from './foor-selection.component';

describe('FoorSelectionComponent', () => {
  let component: FoorSelectionComponent;
  let fixture: ComponentFixture<FoorSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoorSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoorSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
