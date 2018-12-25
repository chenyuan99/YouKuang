import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Response} from '../entity/Response';

@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    constructor(private httpClient: HttpClient) {
    }

    private _response$ = new Subject<boolean>();

    get response$(): Observable<boolean> {
        return this._response$.asObservable();
    }

    register(userName: string, password: string) {
        const registerURL = '/register';
        const data = {
            userName: userName,
            password: password,
        };
        this.httpClient.get<Response>(registerURL, {
            params: data
        }).subscribe(
            response => {
                if (response.succeed) {
                    this._response$.next(true);
                } else {
                    this._response$.next(false);
                }
            }
        );
    }
}
