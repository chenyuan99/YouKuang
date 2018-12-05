import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {AccountItem} from '../../../entity/AccountItem';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';

@Component({
    selector: 'app-account-content',
    templateUrl: './account-content.component.html',
    styleUrls: ['./account-content.component.css']
})
export class AccountContentComponent implements OnInit {
    private accountItemList: AccountItem[] = [];

    private accountName = '';

    private costSum = 0;

    private incomeSum = 0;

    loading = true;

    constructor(private accountService: AccountService,
                private routerService: Router,
                private activatedRouterService: ActivatedRoute) {
    }

    ngOnInit() {
        this.routerService.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(
            () => {
                this.initData();
                this.accountName = this.activatedRouterService.snapshot.queryParamMap.get('accountName');
                const accountID = parseInt(this.activatedRouterService.snapshot.paramMap.get('id'), 10);
                this.accountService.getAccountContentById(accountID).subscribe(
                    itemList => {
                        this.accountItemList = itemList;
                        this.accountItemList.forEach(item => {
                            if (item.In_Out === '收入') {
                                this.incomeSum += item.Money;
                            } else {
                                this.costSum += item.Money;
                            }
                        });
                        setTimeout(() => this.loading = false, 1000);
                    }
                );
            }
        );

    }

    private initData() {
        this.accountItemList = [];
        this.accountName = '';
        this.costSum = 0;
        this.incomeSum = 0;
        this.loading = true;
    }
}
