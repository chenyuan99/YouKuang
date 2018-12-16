import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AddItemRequest} from '../entity/AddItemRequest';
import {AccountService} from './account.service';
import {AccountItem} from '../entity/AccountItem';

@Injectable({
    providedIn: 'root'
})
export class AccountItemService {
    private addItemURL = 'account/';

    private modifyItemURL = 'account/';

    constructor(private httpClient: HttpClient,
                private accountService: AccountService,
                private activateRouter: ActivatedRoute) {
    }

    private _addItemResponse$ = new Subject<boolean>();

    get addItemResponse$(): Observable<boolean> {
        return this._addItemResponse$.asObservable();
    }

    private _modifyItemResponse$ = new Subject<boolean>();

    get modifyItemResponse$(): Observable<boolean> {
        return this._modifyItemResponse$.asObservable();
    }

    nextAddItemResponse(request: AddItemRequest, accountID: string) {
        /*        this.httpClient.put(this.addItemURL, request).subscribe(
					response => {
						this.addItemResponse$.next(true);
					}
				);*/
        setTimeout(() => {
            this._addItemResponse$.next(true);
            if (!this.accountService.accountToContentMap[accountID]) {
                this.accountService.accountToContentMap[accountID] = [];
            }
            this.accountService.accountToContentMap[accountID].push(
                new AccountItem(233,
                    request.inOut, request.money,
                    request.type, new Date(request.time),
                    request.tip)
            );
            this.accountService.nextAccountContent(accountID);
        }, 1000);
    }

    nextModifyItemResponse(accountID: string, iNo: number, inOut: string, money: number,
                           type: string, time: Date, tip: string) {
        /*        this.httpClient.patch(this.modifyItemURL + iNo, {}).subscribe(
					response => {
						this._modifyItemResponse$.next(true);
					}
				);*/
        setTimeout(() => {
            this._modifyItemResponse$.next(true);
            const accountItem = this.accountService.accountToContentMap[accountID].find(item => item.iNo === iNo);
            accountItem.inOut = inOut;
            accountItem.money = money;
            accountItem.type = type;
            accountItem.time = time;
            accountItem.tip = tip;
            console.log(accountItem);
            this.accountService.nextAccountContent(accountID);
        }, 1000);
    }


}
