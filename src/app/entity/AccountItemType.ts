export class AccountItemType {
    private readonly _TypeID: number;

    private readonly _Type: string;

    constructor(TypeID: number, Type: string) {
        this._TypeID = TypeID;
        this._Type = Type;
    }

    get TypeID(): number {
        return this._TypeID;
    }

    get Type(): string {
        return this._Type;
    }
}
