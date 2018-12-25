export class AccountItem {
    constructor(iNo: number, inOut: string, money: number, typeID: number, time: string, tip: string) {
        this._iNo = iNo;
        this._inOut = inOut;
        this._money = money;
        this._typeID = typeID;
        this._time = new Date(time);
        this._tip = tip;
    }

    private _iNo: number;

    get iNo(): number {
        return this._iNo;
    }

    set iNo(value: number) {
        this._iNo = value;
    }

    private _inOut: string;

    get inOut(): string {
        return this._inOut;
    }

    set inOut(value: string) {
        this._inOut = value;
    }

    private _money: number;

    get money(): number {
        return this._money;
    }

    set money(value: number) {
        this._money = value;
    }

    private _typeID: number;

    get typeID(): number {
        return this._typeID;
    }

    set typeID(value: number) {
        this._typeID = value;
    }

    private _time: Date;

    get time(): Date {
        return this._time;
    }

    set time(value: Date) {
        this._time = value;
    }

    private _tip: string;

    get tip(): string {
        return this._tip;
    }

    set tip(value: string) {
        this._tip = value;
    }
}
