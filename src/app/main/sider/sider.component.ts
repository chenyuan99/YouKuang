import {Component, OnInit} from '@angular/core';
import {CollapseService} from '../../service/collapse.service';
import {AccountService} from '../../service/account.service';
import {MyAccount} from '../../entity/MyAccount';
import {MobileService} from '../../service/mobile.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-sider',
    templateUrl: './sider.component.html',
    styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
    accountList: MyAccount[] = [];

    accountContentURL = 'account/';

    constructor(public collapsedService: CollapseService,
                private accountService: AccountService,
                public mobileService: MobileService) {
    }

    ngOnInit() {
        this.accountService.accountList$.subscribe(
            value => {
                this.accountList = value;
                value.forEach(account => {
                    this.accountService.nextAccountContent(String(account.accountID));
                });
            }
        );
        this.accountService.nextAllAccount();
    }
}
