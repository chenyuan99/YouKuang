import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {MyAccount} from '../../../entity/MyAccount';
import {MobileService} from '../../../service/mobile.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    inputValue: string;

    style = {
        'display': 'inline-block',
        'margin-left': this.mobileService.isMobile ? '0' : '50px',
    };

    options: MyAccount[];

    constructor(private accountService: AccountService,
                private mobileService: MobileService) {
    }

    ngOnInit() {
    }

    onInput(value: string) {
        if (value) {
            this.options = this.accountService
                               .accountList
                               .filter(account => account.accountName.indexOf(value) !== -1);
        }
    }
}
