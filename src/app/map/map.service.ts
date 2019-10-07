import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { RestAddresses } from '../core/content/RestAddresses';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MapService {
  Token: string;
  constructor(private httpClient: HttpClient) {
    this.Token = localStorage.getItem('Token');
  }

  getFoods(province_id): Observable<any> {
    const guest_token = localStorage.getItem('Token');
    return this.httpClient.post<Response>(RestAddresses.FOODS, { province_id, guest_token });
  }
}
