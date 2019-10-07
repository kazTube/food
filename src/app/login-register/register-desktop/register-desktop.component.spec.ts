import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterDesktopComponent } from './register-desktop.component';

describe('RegisterDesktopComponent', () => {
  let component: RegisterDesktopComponent;
  let fixture: ComponentFixture<RegisterDesktopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterDesktopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
