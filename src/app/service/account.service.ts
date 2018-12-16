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
    private deleteAccountItemURL = 'account';

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

    get accountToContentMap(): { [key: string]: AccountItem[] } {
        return this._accountToContentMap;
    }

    set accountToContentMap(value: { [key: string]: AccountItem[] }) {
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

    // todo: 删除账本项
    deleteAccountItem(accountID: string, items: AccountItem[]) {
        setTimeout(() => {
            items.forEach(item => console.log(`删除${this.deleteAccountItemURL}/${accountID}/${item.iNo}`));
            this._accountToContentMap[accountID].filter(item => item['checked'])
                                                .forEach(item => {
                                                    item['isDeleted'] = true;
                                                    item['checked'] = false;
                                                });
            this._accountContent$.next(
                this._accountToContentMap[accountID].filter(item => !item['isDeleted'])
            );
            this._deleteResponse$.next(true);
        }, 500);
        /*        this.httpClient.delete(`${this.deleteAccountItemURL}/${accountID}/${item.iNo}`).subscribe(
					response => console.log(response)
				);*/
    }

    // todo: 新建账本
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
                request.name,
                new Date(),
                new Date(),
                0,
                this._accountList.length + 1)
            );
            this.accountToContentMap[String(this._accountList.length)] = [];
            this.nextAllAccount();
            this._createAccountResponse$.next(true);
        }, 1000);
    }

    nextAccountContent(id: string) {
        if (this._accountToContentMap[id]) {
            this._accountContent$.next([...this._accountToContentMap[String(id)].filter(item => !item['isDeleted'])]);
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
        this._accountList.forEach(
            account => this._accountIdToName[account.accountID] = account.accountName
        );
        if (this._accountList.length !== 0) {
            this._accountList$.next(this._accountList);
            return;
        }
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
