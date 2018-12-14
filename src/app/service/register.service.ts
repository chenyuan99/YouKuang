import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';

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
        // todo: http

        /*        const registerURL = '/registerLoading';
				this.httpClient.post(registerURL, {
					userName: userName,
					password: password
				}).subscribe(
					response => {
						if (response) {
							this._response$.next(true);
						} else {
							this._response$.next(false);
						}
					}
				);*/
        setTimeout(() => {
            this._response$.next(true);
            console.log('next');
        }, 500);
    }
}
