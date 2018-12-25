import {Injectable} from '@angular/core';
import {AccountItemType} from '../entity/AccountItemType';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ItemTypeService {
    types: AccountItemType[];

    typeID2Name = {};

    constructor(private httpClient: HttpClient) {
    }
}
