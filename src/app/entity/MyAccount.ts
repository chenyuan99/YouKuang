/**
 * Account和lib.dom.d.ts库中一个接口冲突了 恩???
 */
export class MyAccount {
  constructor(Aname: string, Ltime: Date, Ctime: Date, Sum: number, AID: number) {
    this._Aname = Aname;
    this._Ltime = Ltime;
    this._Ctime = Ctime;
    this._Sum = Sum;
    this._AID = AID;
  }

  private _Aname: string;

  get Aname(): string {
    return this._Aname;
  }

  set Aname(value: string) {
    this._Aname = value;
  }

  private _Ltime: Date;

  get Ltime(): Date {
    return this._Ltime;
  }

  set Ltime(value: Date) {
    this._Ltime = value;
  }

  private _Ctime: Date;

  get Ctime(): Date {
    return this._Ctime;
  }

  set Ctime(value: Date) {
    this._Ctime = value;
  }

  private _Sum: number;

  get Sum(): number {
    return this._Sum;
  }

  set Sum(value: number) {
    this._Sum = value;
  }

  private _AID: number;

  get AID(): number {
    return this._AID;
  }

  set AID(value: number) {
    this._AID = value;
  }

}
