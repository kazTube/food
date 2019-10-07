import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RoutingService {
isNavigate = new BehaviorSubject<boolean>(false);
  constructor() { }
  setNavigat(set: boolean) {
    
    this.isNavigate.next(set);
  }
}
