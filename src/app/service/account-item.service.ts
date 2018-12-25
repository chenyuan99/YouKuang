import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AddItemRequest} from '../entity/AddItemRequest';
import {AccountService} from './account.service';

@Injectable({
    providedIn: 'root'
})
export class AccountItemService {
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
        const addItemURL = 'account/';
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        const data = new HttpParams()
            .set('inOut', request.inOut)
            .set('money', String(request.money))
            .set('time', String(request.time))
            .set('type', String(request.type))
            .set('tip', request.tip);
/*        const data = {
            inOut: request.inOut,
            money: request.money,
            time: request.time,
            typeID: request.typeID,
            tip: request.tip,
        };*/
        console.log(data.toString());
        this.httpClient.put(addItemURL + accountID, data.toString(), httpOptions).subscribe(
            response => {
                this._addItemResponse$.next(true);
                this.accountService.nextAccountContent(accountID);
            },
            error => {
                this._addItemResponse$.next(false);
            }
        );
        /*        setTimeout(() => {
					this._addItemResponse$.next(true);
					if (!this.accountService.accountToContentMap[accountID]) {
						this.accountService.accountToContentMap[accountID] = [];
					}
					this.accountService.accountToContentMap[accountID].push(
						new AccountItem(233,
							request.inOut, request.money,
							request.typeID, new Date(request.time),
							request.tip)
					);
					this.accountService.nextAccountContent(accountID);
				}, 1000);*/
    }

    nextModifyItemResponse(accountID: string, iNo: number, inOut: string, money: number,
                           type: number, time: Date, tip: string) {
        const modifyItemURL = 'account/';
        const data = new HttpParams()
            .set('accountItemID', String(iNo))
            .set('inOut', inOut)
            .set('money', String(money))
            .set('time', String(time.getTime()))
            .set('type', String(type))
            .set('tip', tip);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/x-www-form-urlencoded'
            }),
        };
        this.httpClient.patch(modifyItemURL + accountID, data.toString(), httpOptions).subscribe(
            response => {
                this._modifyItemResponse$.next(true);
            }
        );
/*        setTimeout(() => {
            this._modifyItemResponse$.next(true);
            const accountItem = this.accountService.accountToContentMap[accountID].find(item => item.iNo === iNo);
            accountItem.inOut = inOut;
            accountItem.money = money;
            accountItem.typeID = type;
            accountItem.time = time;
            accountItem.tip = tip;
            console.log(accountItem);
            this.accountService.nextAccountContent(accountID);
        }, 1000);*/
    }


}
