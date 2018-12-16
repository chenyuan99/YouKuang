import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AddItemRequest} from '../entity/AddItemRequest';
import {AccountService} from './account.service';
import {AccountItem} from '../entity/AccountItem';

@Injectable({
    providedIn: 'root'
})
export class AccountItemService implements OnInit {
    private addItemURL = 'account/';

    constructor(private httpClient: HttpClient,
                private accountService: AccountService,
                private activateRouter: ActivatedRoute) {
    }

    private _addItemResponse$ = new Subject<boolean>();

    get addItemResponse$(): Observable<boolean> {
        return this._addItemResponse$.asObservable();
    }

    nextResponse(request: AddItemRequest, accountID: string) {
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

    ngOnInit(): void {
    }

}
