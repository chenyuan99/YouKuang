import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {USER_INFO, UserInfo} from '../main/entity/UserInfo';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) {
  }

  getUserInfo(): Observable<UserInfo> {
    return of(USER_INFO);
  }
}
