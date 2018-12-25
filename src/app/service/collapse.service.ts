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

    set isCollapsed(value: boolean) {
        this._isCollapsed = value;
    }

    changeCollapsed() {
        this._isCollapsed = !this._isCollapsed;
    }
}
