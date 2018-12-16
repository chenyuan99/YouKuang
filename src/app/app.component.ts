import {Component, OnInit} from '@angular/core';
import {ItemTypeService} from './service/item-type.service';
import {AccountItemType} from './entity/AccountItemType';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private itemTypeService: ItemTypeService) {
    }

    ngOnInit(): void {
        document.body.style.backgroundColor = '#f0f2f5';
        const itemTypeURL = '/recordTypes';
        /*        this.httpClient.get<AccountItemType[]>(itemTypeURL).subscribe(
					types => this.types = types
				);*/
        this.itemTypeService.types = [
            new AccountItemType(21, '工资'),
            new AccountItemType(21, '餐饮'),
        ];
    }
}
