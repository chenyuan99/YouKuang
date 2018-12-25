export class AddItemRequest {
    inOut: string;

    money: number;

    type: number;

    time: number;

    tip: string;

    constructor(inOut: string, money: number, type: number, time: number, tip: string) {
        this.inOut = inOut;
        this.money = money;
        this.type = type;
        this.time = time;
        this.tip = tip;
    }
}
