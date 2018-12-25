import {Injectable} from '@angular/core';
import {MyAccount} from '../entity/MyAccount';
import {Observable, Subject} from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {AccountItem} from '../entity/AccountItem';
import {CreateAccountRequest} from '../entity/CreateAccountRequest';
import {Response} from '../entity/Response';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    private deleteAccountItemURL = 'account';

    private _createAccountURL = '/account';

    private _getAllAccountURL = '/accounts';

    private _getAccountByIdURL = '/account/';

    constructor(private _httpClient: HttpClient) {
    }

    private _accountIdToName: { [key: number]: string } = {};

    get accountIdToName(): { [p: number]: string } {
        return this._accountIdToName;
    }

    private _deleteResponse$ = new Subject<boolean>();

    get deleteResponse$(): Observable<boolean> {
        return this._deleteResponse$.asObservable();
    }

    private _createAccountResponse$ = new Subject<boolean>();

    get createAccountResponse$(): Observable<boolean> {
        return this._createAccountResponse$.asObservable();
    }

    get httpClient(): HttpClient {
        return this._httpClient;
    }

    private _accountList: MyAccount[] = [];

    get accountList(): MyAccount[] {
        return this._accountList;
    }


    private _accountToContentMap: { [key: string]: AccountItem[] } = {};

    get accountToContentMap(): { [key: string]: AccountItem[] } {
        return this._accountToContentMap;
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

    deleteAccountItem(accountID: string, items: AccountItem[]) {
        items.forEach(item => {
            const data = new HttpParams()
                .set('accountItemID', String(item.iNo));
            const httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                params: data
            };
            this.httpClient.delete<Response>(`${this.deleteAccountItemURL}/${accountID}`, httpOptions).subscribe(
                response => {
                    this._deleteResponse$.next(response.succeed);
                }
            );
        });
        this._accountToContentMap[accountID].filter(item => item['checked'])
                                            .forEach(item => {
                                                item['isDeleted'] = true;
                                                item['checked'] = false;
                                            });
        this._accountContent$.next(
            this._accountToContentMap[accountID].filter(item => !item['isDeleted'])
        );
    }

    createAccount(request: CreateAccountRequest) {
        const data = {
            accountName: request.name
        };
        this._httpClient.post<Response>(this._createAccountURL, null, {
            params: data
        }).subscribe(
            response => {
                if (response.succeed) {
                    this.nextAllAccount();
                    this._createAccountResponse$.next(true);
                } else {
                    this._createAccountResponse$.next(false);
                }
            }
        );
    }

    nextAccountContent(id: string) {
        this._httpClient.get<AccountItem[]>(this._getAccountByIdURL + id).subscribe(
            value => {
                this._accountToContentMap[id] = value;
                this._accountContent$.next(value);
            }
        );
    }

    nextAllAccount() {
        this._httpClient.get<MyAccount[]>(this._getAllAccountURL).subscribe(
            value => {
                this._accountList = value;
                this._accountList$.next(this._accountList);
                this._accountList.forEach(
                    account => this._accountIdToName[account.accountID] = account.accountName
                );
            }
        );
    }
}
