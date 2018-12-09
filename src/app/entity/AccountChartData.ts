export class AccountChartData {
    constructor(title: string, data: any[]) {
        this._title = title;
        this._data = data;
    }

    private _title: string;

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    private _data: any[];

    get data(): any[] {
        return this._data;
    }

    set data(value: any[]) {
        this._data = value;
    }
}
