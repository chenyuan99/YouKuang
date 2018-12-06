import {Component, OnInit} from '@angular/core';
import {CollapseService} from '../../../service/collapse.service';
import {NzMessageService} from 'ng-zorro-antd';
import {AccountService} from '../../../service/account.service';
import {CreateAccountRequest} from '../../../entity/CreateAccountRequest';

@Component({
    selector: 'app-add-account-button',
    templateUrl: './add-account-button.component.html',
    styleUrls: ['./add-account-button.component.css']
})
export class AddAccountButtonComponent implements OnInit {
    isVisible = false;

    accountName: string;

    budge: string;

    constructor(private collapsedService: CollapseService,
                private message: NzMessageService,
                private accountService: AccountService) {
    }

    ngOnInit() {
        this.accountService.createAccountResponse$.subscribe(
            response => {
                console.log(response);
                this.isVisible = false;
            },
            error => console.log('error'),
            () => console.log('complete')
        );
    }

    onSubmit() {
        if (!this.isValidate(this.accountName, this.budge)) {
            this.message.create('error', '别调皮');
        } else {
            const request = new CreateAccountRequest(this.accountName, parseInt(this.budge, 10));
            this.accountService.createAccount(request);
        }

    }

    openModal() {
        this.isVisible = true;
    }

    closeModal() {
        this.isVisible = false;
    }

    private isValidate(accountName: string, budge: string): boolean {
        return true;
    }
}
