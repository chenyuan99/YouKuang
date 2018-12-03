import {Injectable} from '@angular/core';
import {MyAccount} from '../entity/MyAccount';
import {Observable, of, Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AccountItem} from '../entity/AccountItem';
import {ACCOUNT_LIST} from '../DATA';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private getAllAccountURL = '/accounts';

  private getAccountByIdURL = '/account';

  private accountList: MyAccount[] = [];

  private accountToContentMap: { [key: string]: AccountItem[] } = {};

  constructor(private httpClient: HttpClient) {
  }

  private _accountList$ = new Subject<MyAccount[]>();

  get accountList$(): Observable<MyAccount[]> {
    return of(ACCOUNT_LIST);
    // return this._accountList$;
  }

  private _accountItemList$ = new Subject<AccountItem[]>();

  get accountItemList$(): Observable<AccountItem[]> {
    return of();
    return this._accountItemList$;
  }

  getAccountContentById(id: number) {
    if (this.accountToContentMap[id] != null) {

    }
    this.httpClient.get<AccountItem[]>(this.getAccountByIdURL + id).subscribe(
      value => {
        this.accountToContentMap;
        this._accountItemList$.next(value);
      }
    );
  }

  getAllAccount() {
    this.httpClient.get<MyAccount[]>(this.getAllAccountURL).subscribe(
      value => {
        this.accountList = value;
        this._accountList$.next(this.accountList);
      }
    );
  }
}
