export class AccountItemType {
    private readonly _typeID: number;

    private readonly _type: string;

    constructor(typeID: number, type: string) {
        this._typeID = typeID;
        this._type = type;
    }

    get typeID(): number {
        return this._typeID;
    }

    get type(): string {
        return this._type;
    }
}
