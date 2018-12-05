import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {AccountItem} from '../../../entity/AccountItem';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-account-content',
    templateUrl: './account-content.component.html',
    styleUrls: ['./account-content.component.css']
})
export class AccountContentComponent implements OnInit {
    private accountItemList: AccountItem[] = [];

    private accountName = '';

    loading = true;

    constructor(private accountService: AccountService,
                private routerService: Router,
                private activatedRouterService: ActivatedRoute) {
    }

    ngOnInit() {
        setTimeout(() => this.loading = false, 1000);
        this.activatedRouterService.queryParamMap.subscribe(
            value => this.accountName = value.get('accountName')
        );
    }

    private parseIdFromURL(url: string): number {
        // todo
        return 1;
    }

}
