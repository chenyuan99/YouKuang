import {Component, OnInit} from '@angular/core';
import {MobileService} from '../../../service/mobile.service';
import {AccountItemService} from '../../../service/account-item.service';
import {AddItemRequest} from '../../../entity/AddItemRequest';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TableLoadingService} from '../../../service/table-loading.service';

@Component({
    selector: 'app-update-account',
    templateUrl: './update-account.component.html',
    styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
    drawerIsVisible = false;

    private accountID;

    validateForm: FormGroup;

    constructor(public mobileService: MobileService,
                private accountItemService: AccountItemService,
                private messageService: NzMessageService,
                private fb: FormBuilder,
                private activatedRouter: ActivatedRoute,
                public tableLoadingService: TableLoadingService) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            datePickerTime: [null],
            itemType: [null],
            money: [null],
            tip: [null],
        });
        this.activatedRouter.paramMap.subscribe(
            params => this.accountID = params.get('id')
        );
    }

    closeDrawer() {
        this.drawerIsVisible = false;
    }

    openDrawer() {
        this.drawerIsVisible = true;
    }

    onSubmit() {
        this.tableLoadingService.isLoading = true;
        const $response = this.accountItemService.addItemResponse$.subscribe(
            ok => {
                if (ok) {
                    this.messageService.create('success', '记录成功');
                } else {
                    this.messageService.create('error', '记录失败');
                }
                this.drawerIsVisible = false;
                $response.unsubscribe();
            }
        );
        this.accountItemService.nextResponse(
            new AddItemRequest('收入',
                parseInt(this.validateForm.value['money'], 10),
                this.validateForm.value['itemType'],
                this.validateForm.value['datePickerTime'],
                '嘤'), this.accountID);
    }
}
