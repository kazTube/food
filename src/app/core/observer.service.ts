import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObserverService {  
stateFoods = new BehaviorSubject<any>([]);
stateId = new BehaviorSubject<number>(0);
  constructor() { }


  setFoods(foods:any[]) {
    
    this.stateFoods.next(foods);
  }
  setStateId(id:number) {
    this.stateId.next(id);
  }
}
