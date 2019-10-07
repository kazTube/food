import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAddresses } from '../core/content/RestAddresses';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  Token: string;
  constructor(private httpClient: HttpClient) {
    this.Token = localStorage.getItem('guest_token');
  }

  getFoods(province_id): Observable<any> {
    if (localStorage.getItem('guest_token')) {

      const guest_token = localStorage.getItem('guest_token');
      return this.httpClient.post<Response>(RestAddresses.FOODS, { province_id, guest_token });
    } else {
      const token = localStorage.getItem('Token');
      return this.httpClient.post<Response>(RestAddresses.FOODS, { province_id, token });
    }
  }
  checkVotedBefore(guest_token: string) {

    if (localStorage.getItem('guest_token')) {
      return this.httpClient.post<Response>(RestAddresses.VOTE_HISTORY, { guest_token })

    } else {
      const token = localStorage.getItem('Token')

      return this.httpClient.post<Response>(RestAddresses.VOTE_HISTORY, { token })

    }
  }
}
