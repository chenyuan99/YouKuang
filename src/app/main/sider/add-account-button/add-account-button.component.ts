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

    loading = false;

    budge: string;

    constructor(private collapsedService: CollapseService,
                private message: NzMessageService,
                private accountService: AccountService) {
    }

    ngOnInit() {
    }

    onSubmit() {
        this.loading = true;
        if (!this.isValidate(this.accountName, this.budge)) {
            this.message.create('error', '别调皮');
            this.loading = false;
        } else {
            const $createAccountResponse = this.accountService.createAccountResponse$.subscribe(
                response => {
                    console.log(response);
                    this.loading = false;
                    this.isVisible = false;
                    $createAccountResponse.unsubscribe();
                }
            );
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
        // todo: 验证budge为数字
        if (!accountName || !budge ||
            accountName.length <= 0 || accountName.length >= 20 || budge.length <= 0) {
            return false;
        }
        return true;
    }
}
