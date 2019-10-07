import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { RestAddresses } from '../core/content/RestAddresses';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SelectionFoodService {

  constructor(private httpClient: HttpClient) { }
  setVote(province_id: number, food_ids: any[]): Observable<any> {
    if (localStorage.getItem('guest_token')) {
      const guest_token = localStorage.getItem('guest_token');
      return this.httpClient.post<Response>(RestAddresses.VOTE, { province_id, food_ids, guest_token })

    } else {
      console.log('token asli');
      
      const token = localStorage.getItem('Token')
      return this.httpClient.post<Response>(RestAddresses.VOTE, { province_id, food_ids, token })
    }
  }
}
