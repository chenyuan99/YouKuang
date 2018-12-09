/**
 * Account和lib.dom.d.ts库中一个接口冲突了 恩???
 */
export class MyAccount {
    constructor(Aname: string, Ltime: Date, Ctime: Date, Sum: number, AID: number) {
        this._accountName = Aname;
        this._lastModifiedTime = Ltime;
        this._createdTime = Ctime;
        this._sum = Sum;
        this._accountID = AID;
    }

    private _accountName: string;

    get accountName(): string {
        return this._accountName;
    }

    set accountName(value: string) {
        this._accountName = value;
    }

    private _lastModifiedTime: Date;

    get lastModifiedTime(): Date {
        return this._lastModifiedTime;
    }

    set lastModifiedTime(value: Date) {
        this._lastModifiedTime = value;
    }

    private _createdTime: Date;

    get createdTime(): Date {
        return this._createdTime;
    }

    set createdTime(value: Date) {
        this._createdTime = value;
    }

    private _sum: number;

    get sum(): number {
        return this._sum;
    }

    set sum(value: number) {
        this._sum = value;
    }

    private _accountID: number;

    get accountID(): number {
        return this._accountID;
    }

    set accountID(value: number) {
        this._accountID = value;
    }

}
