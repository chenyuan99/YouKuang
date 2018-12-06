export class CreateAccountRequest {
    constructor(name: string, budget: number) {
        this._name = name;
        this._budget = budget;
    }

    private _name: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    private _budget: number;

    get budget(): number {
        return this._budget;
    }

    set budget(value: number) {
        this._budget = value;
    }
}
