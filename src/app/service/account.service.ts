import {Injectable} from '@angular/core';
import {MyAccount} from '../entity/MyAccount';
import {Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AccountItem} from '../entity/AccountItem';
import {ACCOUNT_LIST, ACCOUNT_TO_CONTENT} from '../DATA';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private testData = ACCOUNT_TO_CONTENT;

    private getAllAccountURL = '/accounts';

    private getAccountByIdURL = '/account';

    constructor(private httpClient: HttpClient) {
    }

    getAccountContentById(id: number): Observable<AccountItem[]> {
        return of(this.testData[id]);
        // return this.httpClient.get<AccountItem[]>(this.getAccountByIdURL + id);
    }

    getAllAccount(): Observable<MyAccount[]> {
        return of(ACCOUNT_LIST);
        // return this.httpClient.get<MyAccount[]>(this.getAllAccountURL);
    }
}
