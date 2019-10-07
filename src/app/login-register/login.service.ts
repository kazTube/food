import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RestAddresses } from '../core/content/RestAddresses';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Token: string;

  constructor(private httpClient: HttpClient) {
    this.Token = localStorage.getItem('Token');
  }
  registeration(identity: any[]): Observable<any> {
    const guest_token = localStorage.getItem('Token');
    return this.httpClient.post<Response>(RestAddresses.REGISTER, identity)
  }
  login(username: string, password: string): Observable<any> {
    const guest_token = localStorage.getItem('Token');
    return this.httpClient.post<Response>(RestAddresses.LOGIN, { username, password, guest_token })
  }
}
