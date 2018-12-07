import {Injectable} from '@angular/core';
import {MyAccount} from '../entity/MyAccount';
import {Observable, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AccountItem} from '../entity/AccountItem';
import {ACCOUNT_LIST, ACCOUNT_TO_CONTENT} from '../entity/DATA';
import {CreateAccountRequest} from '../entity/CreateAccountRequest';

@Injectable({
    providedIn: 'root'
})
export class AccountService {
    constructor(private _httpClient: HttpClient) {
    }

    private _getAllAccountURL = '/accounts';

    get getAllAccountURL(): string {
        return this._getAllAccountURL;
    }

    set getAllAccountURL(value: string) {
        this._getAllAccountURL = value;
    }

    private _getAccountByIdURL = '/account';

    get getAccountByIdURL(): string {
        return this._getAccountByIdURL;
    }

    set getAccountByIdURL(value: string) {
        this._getAccountByIdURL = value;
    }

    private _createAccountURL = '/account';

    get createAccountURL(): string {
        return this._createAccountURL;
    }

    set createAccountURL(value: string) {
        this._createAccountURL = value;
    }

    private _createAccountResponse$ = new Subject<boolean>();

    get createAccountResponse$(): Observable<boolean> {
        return this._createAccountResponse$.asObservable();
    }

    get httpClient(): HttpClient {
        return this._httpClient;
    }

    set httpClient(value: HttpClient) {
        this._httpClient = value;
    }

    private _accountList: MyAccount[] = ACCOUNT_LIST;

    get accountList(): MyAccount[] {
        return this._accountList;
    }

    set accountList(value: MyAccount[]) {
        this._accountList = value;
    }

    private _accountToContentMap: { [key: string]: AccountItem[] } = ACCOUNT_TO_CONTENT;

    get accountToContentMap(): { [p: string]: AccountItem[] } {
        return this._accountToContentMap;
    }

    set accountToContentMap(value: { [p: string]: AccountItem[] }) {
        this._accountToContentMap = value;
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

    createAccount(request: CreateAccountRequest) {
        /*        this._httpClient.post<Response>(this._createAccountURL, request).subscribe(
					response => {
						if (response.succeed) {
							this._accountList.push(new MyAccount(
								'newAccount',
								new Date(),
								new Date(),
								1000,
								2333)
							);
							this.nextAllAccount();
							this._createAccountResponse$.next(new Response(true, '添加账单成功'));
						}
					}
				);
				return this.createAccountResponse$;*/
        setTimeout(() => {
            this._accountList.push(new MyAccount(
                'newAccount',
                new Date(),
                new Date(),
                1000,
                2333)
            );
            this.nextAllAccount();
            this._createAccountResponse$.next(true);
        }, 1000);
    }

    nextAccountContent(id: string) {
        if (this._accountToContentMap[id]) {
            this._accountContent$.next(this._accountToContentMap[String(id)]);
            return;
        }
        this._httpClient.get<AccountItem[]>(this._getAccountByIdURL + id).subscribe(
            value => {
                this._accountToContentMap[String[id]] = value;
                this._accountContent$.next(value);
            }
        );
    }

    nextAllAccount() {
        if (this._accountList.length !== 0) {
            this._accountList$.next(this._accountList);
            return;
        }
        this._httpClient.get<MyAccount[]>(this._getAllAccountURL).subscribe(
            value => {
                this._accountList = value;
                this._accountList$.next(this._accountList);
            }
        );
    }
}
