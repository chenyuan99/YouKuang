import {Component, OnInit} from '@angular/core';
import {CollapseService} from '../../../service/collapse.service';
import {NzMessageService} from 'ng-zorro-antd';
import {AccountService} from '../../../service/account.service';
import {CreateAccountRequest} from '../../../entity/CreateAccountRequest';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-add-account-button',
    templateUrl: './add-account-button.component.html',
    styleUrls: ['./add-account-button.component.css']
})
export class AddAccountButtonComponent implements OnInit {
    isVisible = false;

    loading = false;

    validateForm: FormGroup;

    constructor(private collapsedService: CollapseService,
                private message: NzMessageService,
                private accountService: AccountService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            accountName: [null, [Validators.required]]
        });
    }

    openModal() {
        this.isVisible = true;
    }

    closeModal() {
        this.isVisible = false;
    }

    submitForm() {
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateForm.valid) {
            return;
        }

        this.loading = true;
        const $createAccountResponse = this.accountService.createAccountResponse$.subscribe(
            response => {
                console.log(response);
                this.loading = false;
                this.isVisible = false;
                $createAccountResponse.unsubscribe();
            }
        );
        const request = new CreateAccountRequest(this.validateForm.value['accountName']);
        this.accountService.createAccount(request);

    }
}
