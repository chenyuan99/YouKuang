import {Component, OnInit} from '@angular/core';
import {MobileService} from '../../../service/mobile.service';
import {AccountItemService} from '../../../service/account-item.service';
import {AddItemRequest} from '../../../entity/AddItemRequest';
import {NzMessageService} from 'ng-zorro-antd';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {TableLoadingService} from '../../../service/table-loading.service';
import {AccountService} from '../../../service/account.service';
import {ItemTypeService} from '../../../service/item-type.service';

@Component({
    selector: 'app-update-account',
    templateUrl: './update-account.component.html',
    styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
    private accountID;

    drawerIsVisible = false;

    validateForm: FormGroup;

    constructor(public mobileService: MobileService,
                private accountItemService: AccountItemService,
                private accountService: AccountService,
                private messageService: NzMessageService,
                private fb: FormBuilder,
                private activatedRouter: ActivatedRoute,
                public itemTypeService: ItemTypeService,
                public tableLoadingService: TableLoadingService) {
    }

    ngOnInit() {
        this.validateForm = this.fb.group({
            date: [null, [Validators.required]],
            itemType: [null, [Validators.required]],
            money: [null, [Validators.required]],
            tip: [null],
            inOut: [null, [Validators.required]]
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
        for (const i in this.validateForm.controls) {
            if (i) {
                this.validateForm.controls[i].markAsDirty();
                this.validateForm.controls[i].updateValueAndValidity();
            }
        }
        if (!this.validateForm.valid) {
            return;
        }
        this.tableLoadingService.isLoading = true;
        const $response = this.accountItemService.addItemResponse$.subscribe(
            ok => {
                if (ok) {
                    this.messageService.create('success', '记录成功');
                } else {
                    this.messageService.create('error', '记录失败');
                }
                this.drawerIsVisible = false;
                this.tableLoadingService.isLoading = false;
                $response.unsubscribe();
            }
        );
        this.accountItemService.nextAddItemResponse(
            new AddItemRequest(
                this.validateForm.value['inOut'],
                parseInt(this.validateForm.value['money'], 10),
                parseInt(this.validateForm.value['itemType'], 10),
                (<Date>this.validateForm.value['date']).getTime(),
                this.validateForm.value['tip']
            ),
            this.accountID
        );
    }

    deleteCheckedItem() {
        const toDeleteItem = this.accountService.accountToContentMap[this.accountID]
            .filter(item => item['checked']);
        if (toDeleteItem.length !== 0) {
            const $deleteResponse = this.accountService.deleteResponse$.subscribe(
                ok => {
                    if (ok) {
                        this.messageService.create('success', '删除成功');
                    } else {
                        this.messageService.create('error', '删除失败');
                    }
                    $deleteResponse.unsubscribe();
                }
            );
            this.accountService.deleteAccountItem(this.accountID, toDeleteItem);
        } else {
            this.messageService.create('info', '别调皮');
        }
    }

    cancelDelete() {
        this.accountService
            .accountToContentMap[this.accountID]
            .filter(item => item['checked'])
            .forEach(item => item['checked'] = false);
    }

    invalid(formControlName: string): boolean {
        return this.validateForm.get(formControlName).dirty &&
            this.validateForm.get(formControlName).invalid;
    }
}
