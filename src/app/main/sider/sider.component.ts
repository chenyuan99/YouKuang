import {Component, OnInit} from '@angular/core';
import {CollapseService} from '../../service/collapse.service';
import {AccountService} from '../../service/account.service';
import {MyAccount} from '../../entity/MyAccount';
import {ACCOUNT_LIST} from '../../DATA';
import {MobileService} from '../../service/mobile.service';

@Component({
    selector: 'app-sider',
    templateUrl: './sider.component.html',
    styleUrls: ['./sider.component.css']
})
export class SiderComponent implements OnInit {
    accountList: MyAccount[] = ACCOUNT_LIST;

    accountContentURL = 'account/';

    constructor(private collapsedService: CollapseService,
                private accountService: AccountService,
                private mobileService: MobileService) {
    }

    ngOnInit() {
    }
}
