import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CollapseService {
    get isCollapsed(): boolean {
        return this._isCollapsed;
    }
    private _isCollapsed = false;

    constructor() {
    }

    changeCollapsed() {
        this._isCollapsed = !this._isCollapsed;
    }
}
