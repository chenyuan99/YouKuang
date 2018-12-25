import {Component, OnInit} from '@angular/core';
import {AccountService} from '../service/account.service';
import {MobileService} from '../service/mobile.service';
import {AccountChartData} from '../entity/AccountChartData';
import {ItemTypeService} from '../service/item-type.service';

@Component({
    selector: 'app-statistic',
    templateUrl: './statistic.component.html',
    styleUrls: ['./statistic.component.css']
})

export class StatisticComponent implements OnInit {

    dataList: AccountChartData[] = [];

    mobileView = [280, 200];

    deskView = [600, 400];

    colorScheme = {
        name: 'forest',
        selectable: false,
        group: 'Ordinal',
        domain: [
            '#55C22D', '#C1F33D', '#3CC099', '#AFFFFF', '#8CFC9D', '#76CFFA', '#BA60FB', '#EE6490', '#C42A1C', '#FC9F32'
        ]
    };

    createText = ({data}) => {
        return `
          <span class="tooltip-label">${data.name}</span>
          <span class="tooltip-val">¥${data.value}</span>
    `;
    };

    constructor(private accountService: AccountService,
                public mobileService: MobileService,
                private itemTypeService: ItemTypeService) {
    }

    ngOnInit() {
        for (const key in this.accountService.accountToContentMap) {
            if (key) {
                const accountName = this.accountService.accountIdToName[key];
                const contentList = this.accountService.accountToContentMap[key];
                this.dataList.push(
                    new AccountChartData(accountName,
                        contentList.filter(item => !item['isDeleted'])
                                   .map(item => {
                                       return {
                                           'name': this.itemTypeService.typeID2Name[item.typeID],
                                           'value': item.money,
                                       };
                                   }))
                );
            }
        }
    }

}
