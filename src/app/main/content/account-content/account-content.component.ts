import {Component, OnInit} from '@angular/core';
import {AccountService} from '../../../service/account.service';
import {AccountItem} from '../../../entity/AccountItem';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import {CollapseService} from '../../../service/collapse.service';
import {MobileService} from '../../../service/mobile.service';
import {TableLoadingService} from '../../../service/table-loading.service';
import {NzNotificationService} from 'ng-zorro-antd';

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

    constructor(private accountService: AccountService,
                private routerService: Router,
                private activatedRouterService: ActivatedRoute,
                private collapsedService: CollapseService,
                private mobileService: MobileService,
                public loading: TableLoadingService,
                private notification: NzNotificationService) {
    }

    ngOnInit() {
        this.accountService.accountContent$.subscribe(
            value => {
                this.resetData();
                this.accountItemList = value;
                this.accountItemList.forEach(item => {
                    item['checked'] = false;
                    item['itDeleted'] = false;
                });
                this.incomeSum = this.accountItemList
                                     .filter(item => item.In_Out === '收入')
                                     .map(item => item.Money)
                                     .reduce((pre, curr) => pre + curr, 0);
                this.costSum = this.accountItemList
                                   .filter(item => item.In_Out === '支出')
                                   .map(item => item.Money)
                                   .reduce((pre, curr) => pre + curr, 0);
                setTimeout(() => {
                    this.loading.isLoading = false;
                    if (this.mobileService.isMobile &&
                        !this.collapsedService.isCollapsed) {
                        this.collapsedService.changeCollapsed();
                    }
                }, 500);
            }
        );
        this.routerService.events.pipe(
            filter(event => event instanceof NavigationEnd)
        ).subscribe(
            () => {
                this.updateData();
            }
        );
        // 实在没有办法了T_T
        this.updateData();

    }

    // item.Type, item.Money, item.Time, item.Tip
    public createNotification(type: string, money: number, time: Date, tip: string) {
        this.notification.create('info', tip,
            `时间: ${time.toLocaleString()}   类型: ${type}`);
    }

    private resetData() {
        this.costSum = 0;
        this.incomeSum = 0;
        this.loading.isLoading = true;
    }

    private updateData() {
        this.accountName = this.activatedRouterService.snapshot.queryParamMap.get('accountName');
        const accountID = this.activatedRouterService.snapshot.paramMap.get('id');
        this.accountService.nextAccountContent(accountID);
    }
}
