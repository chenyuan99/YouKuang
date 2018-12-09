export class AccountItemType {
    private readonly _typeID: number;

    private readonly _type: string;

    constructor(TypeID: number, Type: string) {
        this._typeID = TypeID;
        this._type = Type;
    }

    get typeID(): number {
        return this._typeID;
    }

    get type(): string {
        return this._type;
    }
}
