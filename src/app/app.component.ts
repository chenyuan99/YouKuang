import {Component, OnInit} from '@angular/core';
import {ItemTypeService} from './service/item-type.service';
import {AccountItemType} from './entity/AccountItemType';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    constructor(private itemTypeService: ItemTypeService,
                private httpClient: HttpClient) {
    }

    ngOnInit(): void {
        document.body.style.backgroundColor = '#f0f2f5';
        const itemTypeURL = '/recordTypes';
        this.httpClient.get<AccountItemType[]>(itemTypeURL).subscribe(
            types => {
                this.itemTypeService.types = types;
                types.forEach(type => this.itemTypeService.typeID2Name[type.typeID] = type.type);
            }
        );
    }
}
