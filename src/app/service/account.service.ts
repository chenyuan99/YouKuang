import {Injectable} from '@angular/core';
import {MyAccount} from '../entity/MyAccount';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AccountItem} from '../entity/AccountItem';
import {ACCOUNT_LIST, ACCOUNT_TO_CONTENT} from '../DATA';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private getAllAccountURL = '/accounts';

    private getAccountByIdURL = '/account';

    private accountList: MyAccount[] = ACCOUNT_LIST;

    private accountToContentMap: { [key: string]: AccountItem[] } = ACCOUNT_TO_CONTENT;

    constructor(private httpClient: HttpClient) {
    }

    private _accountList$ = new Subject<MyAccount[]>();

    get accountList$(): Observable<MyAccount[]> {
        // return of(ACCOUNT_LIST);
        return this._accountList$.asObservable();
    }

    private _accountContent$ = new Subject<AccountItem[]>();

    get accountContent$(): Observable<AccountItem[]> {
        // return of();
        return this._accountContent$.asObservable();
    }

    nextAccountContent(id: number) {
        if (this.accountToContentMap[String(id)] != null) {
            this._accountContent$.next(this.accountToContentMap[String(id)]);
            return;
        }
        this.httpClient.get<AccountItem[]>(this.getAccountByIdURL + id).subscribe(
            value => {
                this.accountToContentMap[String[id]] = value;
                this._accountContent$.next(value);
            }
        );
    }

    nextAllAccount() {
        if (this.accountList.length !== 0) {
            this._accountList$.next(this.accountList);
            return;
        }
        this.httpClient.get<MyAccount[]>(this.getAllAccountURL).subscribe(
            value => {
                this.accountList = value;
                this._accountList$.next(this.accountList);
            }
        );
    }
}
