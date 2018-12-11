import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

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
        /*        this.httpClient.post(this.loginURL, {
					userName: userName,
					password: password
				}).subscribe(
					response => {
						if (response) {
							this.response$.next(true);
						} else {
							this.response$.next(false);
						}
					}
				);*/
        setTimeout(() => {
            this._response$.next(true);
        }, 1000);
    }

}
