import {ElementRef, Injectable } from '@angular/core';
import { Router} from '@angular/router';
import { DeviceDetectorService } from 'ngx-device-detector';
@Injectable({
  providedIn: 'root'
})
export class StateService {
appContainer: ElementRef;
private isMobileResolution:boolean;
  constructor(private router: Router,private deviceService: DeviceDetectorService) { 
    this.isMobileResolution = this.deviceService.isMobile();
  }


  isMobile() {
      return this.isMobileResolution;
  }

  isDesktop() {
    return !this.isMobileResolution;
  }

  scrollToTop(){
    if(this.appContainer && this.appContainer.nativeElement) {
      this.appContainer.nativeElement.scrollToTop = 0;
    }
  }
}
