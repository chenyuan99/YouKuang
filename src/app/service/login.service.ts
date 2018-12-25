import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Response} from '../entity/Response';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    private loginURL = 'login';

    constructor(private httpClient: HttpClient) {
    }

    private _response$ = new Subject<boolean>();

    get response$(): Observable<any> {
        return this._response$.asObservable();
    }

    login(userName: string, password: string) {
        const data = new HttpParams()
            .set('userName', userName)
            .set('password', password);
        this.httpClient.get<Response>(this.loginURL, {
            params: data
        }).subscribe(
            response => {
                console.log(response);
                if (response.succeed) {
                    this._response$.next(true);
                } else {
                    this._response$.next(false);
                }
            }
        );
        /*        setTimeout(() => {
					this._response$.next(true);
				}, 1000);*/
    }

}
