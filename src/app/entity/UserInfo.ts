export class UserInfo {
    constructor(userName: string, userIconURL: string, userID: number) {
        this._userName = userName;
        this._userIconURL = userIconURL;
        this._userID = userID;
    }

    private _userName: string;

    get userName(): string {
        return this._userName;
    }

    set userName(value: string) {
        this._userName = value;
    }

    private _userIconURL: string;

    get userIconURL(): string {
        return this._userIconURL;
    }

    set userIconURL(value: string) {
        this._userIconURL = value;
    }

    private _userID: number;

    get userID(): number {
        return this._userID;
    }

    set userID(value: number) {
        this._userID = value;
    }


}
