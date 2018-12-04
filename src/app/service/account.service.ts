import {Injectable} from '@angular/core';
import {MyAccount} from '../entity/MyAccount';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {AccountItem} from '../entity/AccountItem';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private getAllAccountURL = '/accounts';

  private getAccountByIdURL = '/account';

  constructor(private httpClient: HttpClient) {
  }

  getAccountContentById(id: number): Observable<AccountItem[]> {
    return this.httpClient.get<AccountItem[]>(this.getAccountByIdURL + id);
  }

  getAllAccount(): Observable<MyAccount[]> {
    return this.httpClient.get<MyAccount[]>(this.getAllAccountURL);
  }
}
