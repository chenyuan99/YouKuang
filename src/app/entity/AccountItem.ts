export class AccountItem {
    constructor(Ino: number, In_Out: string, Money: number, Type: string, Time: Date, Tip: string) {
        this._Ino = Ino;
        this._In_Out = In_Out;
        this._Money = Money;
        this._Type = Type;
        this._Time = Time;
        this._Tip = Tip;
    }

    private _Ino: number;

    get Ino(): number {
        return this._Ino;
    }

    set Ino(value: number) {
        this._Ino = value;
    }

    private _In_Out: string;

    get In_Out(): string {
        return this._In_Out;
    }

    set In_Out(value: string) {
        this._In_Out = value;
    }

    private _Money: number;

    get Money(): number {
        return this._Money;
    }

    set Money(value: number) {
        this._Money = value;
    }

    private _Type: string;

    get Type(): string {
        return this._Type;
    }

    set Type(value: string) {
        this._Type = value;
    }

    private _Time: Date;

    get Time(): Date {
        return this._Time;
    }

    set Time(value: Date) {
        this._Time = value;
    }

    private _Tip: string;

    get Tip(): string {
        return this._Tip;
    }

    set Tip(value: string) {
        this._Tip = value;
    }
}
