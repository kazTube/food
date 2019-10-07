import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAddresses } from './core/content/RestAddresses';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StartService {

  constructor(private httpClient: HttpClient) { }
  getToken(){
    return this.httpClient.post<Response>(RestAddresses.GUESTTOKEN, null);
  }
}
