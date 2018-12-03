export class Response {
  private readonly _succeed: boolean;

  private readonly _description: string;

  constructor(succeed: boolean, description: string) {
    this._succeed = succeed;
    this._description = description;
  }

  get succeed(): boolean {
    return this._succeed;
  }

  get description(): string {
    return this._description;
  }
}
