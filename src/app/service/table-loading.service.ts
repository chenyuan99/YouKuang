import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class TableLoadingService {
    isLoading = false;

    constructor() {
    }
}
