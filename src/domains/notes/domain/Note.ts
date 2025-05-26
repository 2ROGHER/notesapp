import type { Color } from "./Color";
import type { NoteStatus } from "./note-status.enum";

export class Note {
  private _id: string = "";
  private _name: string = "";
  private _content: string = "";
  private _backgroundImages: Array<string> = [];
  private _color: Set<Color> = new Set<Color>(); // List of colors without duplicates
  private _status: NoteStatus;
  private _timer: Date;
  private _createdAt: Date = new Date();
  private _updatedAt: Date = new Date();
  private _attributes: Map<string, any> = new Map<string, any>();

  constructor(
    id: string,
    name: string,
    content: string,
    backgroundImage: Array<string>,
    color: Set<Color>,
    status: NoteStatus,
    timer: Date,
    createdAt: Date,
    updatedAt: Date,
    attributes: Map<string, any>
  ) {
    this._id = id;
    this._name = name;
    this._content = content;
    this._backgroundImages = backgroundImage;
    this._color = color;
    this._status = status;
    this._timer = timer;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
    this._attributes = attributes;
  }

  public get id(): string {
    return this._id;
  }

  public set id(value: string) {
    this._id = value;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get content(): string {
    return this._content;
  }

  public set content(value: string) {
    this._content = value;
  }

  public get backgroundImage(): Array<string> {
    return this._backgroundImages;
  }

  public set backgroundImage(value: string) {
    this.backgroundImage.push(value);
  }

  public get color(): Set<Color> {
    return this._color;
  }

  public set color(value: Color) {
    this._color.add(value);
  }

  public get status(): NoteStatus {
    return this._status;
  }

  public set status(value: NoteStatus) {
    this._status = value;
  }

  public get timer(): Date {
    return this._timer;
  }

  public set timer(value: Date) {
    this._timer = value;
  }
  
  public get createdAt(): Date {
    return this._createdAt;
  }

  public set createdAt(value: Date) {
    this._createdAt = value;
  }

  public get updatedAt(): Date {
    return this._updatedAt;
  }

  public set updatedAt(value: Date) {
    this._updatedAt = value;
  }

  public get attributes(): Map<string, any> {
    return this._attributes;
  }

  public set attributes(value: any) {
    this._attributes.set(value.key, value.value);
  }

  public setAttributes(key: string, value: any): void {
    this._attributes.set(key, value);
  }

  // ====================================
  //               METHODS
  // ====================================
}
