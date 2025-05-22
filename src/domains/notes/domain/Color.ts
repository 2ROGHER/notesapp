export class Color {
  private _id: string;
  private _name: string;
  private _description: string;
  private _value: string;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    value: string,
    createdAt: Date,
    updatedAt: Date
  ) {
    this._id = id;
    this._name = name;
    this._description = description;
    this._value = value;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }
  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get value(): string {
    return this._value;
  }

  set value(value: string) {
    this._value = value;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  set createdAt(value: Date) {
    this._createdAt = value;
  }

  get updatedAt(): Date {
    return this._updatedAt;
  }

  set updatedAt(value: Date) {
    this._updatedAt = value;
  }
}
