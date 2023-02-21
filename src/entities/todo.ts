export default class Todo {
  private _id: number;
  private _title: string;
  private _completed: boolean;

  constructor(id: number, title: string, completed: boolean) {
    this._id = id;
    this._title = title;
    this._completed = completed;
  }

  get id(): number {
    return this._id;
  }

  get title(): string {
    return this._title;
  }

  get completed(): boolean {
    return this._completed;
  }

  set completed(value: boolean) {
    this._completed = value;
  }
}