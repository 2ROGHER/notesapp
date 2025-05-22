export class Tab {
  private _id: string;
  private _label: string;
  private _changed: boolean;
  private _hovered: boolean;
  private _active: boolean;
  private _state: boolean;

  constructor(
    id: string,
    label: string,
    changed: boolean,
    hovered: boolean,
    active: boolean,
    state: boolean
  ) {
    this._id = id;
    this._label = label;
    this._changed = changed;
    this._hovered = hovered;
    this._active = active;
    this._state = state;
  }

  get id(): string {
    return this._id;
  }
  set id(value: string) {
    this._id = value;
  }

  get label(): string {
    return this._label;
  }
  set label(value: string) {
    this._label = value;
  }

  get changed(): boolean {
    return this._changed;
  }
  set changed(value: boolean) {
    this._changed = value;
  }

  get hovered(): boolean {
    return this._hovered;
  }
  set hovered(value: boolean) {
    this._hovered = value;
  }

  get active(): boolean {
    return this._active;
  }
  set active(value: boolean) {
    this._active = value;
  }

  get state(): boolean {
    return this._state;
  }
  set state(value: boolean) {
    this._state = value;
  }
}
