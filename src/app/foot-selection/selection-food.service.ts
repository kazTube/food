import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { RestAddresses } from '../core/content/RestAddresses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectionFoodService {

  constructor(private httpClient: HttpClient) {}
  setVote(province_id:number, food_ids: any[]): Observable<any>{
    const guest_token = localStorage.getItem('Token');
    return this.httpClient.post<Response>(RestAddresses.VOTE,{province_id,food_ids, guest_token})
  }
}
