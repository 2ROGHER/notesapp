import type { Color } from "./Color";

export class Note {
  private _id: string;
  private _name: string;
  private _content: string;
  private _color: Color[];
  private _attributes: Map<string, any>;
  private _createdAt: Date;
  private _updatedAt: Date;

  constructor(
    id: string,
    name: string,
    content: string,
    color: Color[],
    attributes: Map<string, any>,
    createdAt: Date,
    updatedAt: Date
  ) {
    this._id = id;
    this._name = name;
    this._content = content;
    this._color = color;
    this._attributes = attributes;
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

  get content(): string {
    return this._content;
  }

  set content(value: string) {
    this._content = value;
  }

  get color(): Color[] {
    return this._color;
  }

  set color(value: Color[]) {
    this._color = value;
  }

  get attributes(): Map<string, any> {
    return this._attributes;
  }

  set attributes(value: Map<string, any>) {
    this._attributes = value;
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
