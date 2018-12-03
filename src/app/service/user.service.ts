import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from '../entity/UserInfo';
import {Observable, of, Subject} from 'rxjs';
import {USER_INFO} from '../DATA';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userInfoURL = '/userInfo';

  constructor(private httpClient: HttpClient) {
  }

  private _userInfo$ = new Subject<UserInfo>();

  get userInfo$(): Observable<UserInfo> {
    return of(USER_INFO);
    // return this._userInfo$.asObservable();
  }

  private _userInfo: UserInfo;

  get userInfo(): UserInfo {
    return this._userInfo;
  }

  getUserInfo() {
    this.httpClient.get<UserInfo>(this.userInfoURL).subscribe(
      {
        next: userInfo => {
          this._userInfo = userInfo;
          this._userInfo$.next(userInfo);
        },
        error: err => console.log(err),
        complete: () => console.log('请求完成'),
      }
    );
  }
}
