import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class CollapseService {
    constructor() {
    }

    private _isCollapsed = false;

    get isCollapsed(): boolean {
        return this._isCollapsed;
    }

    changeCollapsed() {
        this._isCollapsed = !this._isCollapsed;
    }
}
