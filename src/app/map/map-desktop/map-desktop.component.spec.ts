import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapDesktopComponent } from './map-desktop.component';

describe('MapDesktopComponent', () => {
  let component: MapDesktopComponent;
  let fixture: ComponentFixture<MapDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
