import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserInfo} from '../entity/UserInfo';
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userInfoURL = '/userInfo';

    constructor(private httpClient: HttpClient) {
    }

    getUserInfo(): Observable<UserInfo> {
        return this.httpClient.get<UserInfo>(this.userInfoURL);
    }
}
