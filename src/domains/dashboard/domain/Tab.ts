import type { TabStatus } from "./tab-status.enum";

/**
 * Class to represent a tab in the dashboard page.
 *
 * @class Tab
 * @property {string} _id - the unique identifier of the tab
 * @property {string} _label - the label that will be displayed in the tab
 * @property {boolean} _changed - whether the tab has been changed or not
 * @property {boolean} _hovered - whether the tab is being hovered or not
 * @property {boolean} _active - whether the tab is active or not
 * @property {TabStatus} _state - the state of the tab, whether is opened or closed or updated etc.
 * @example
 * const tab = new Tab(
 *   '1',
 *   'Tab 1',
 *   true,
 *   false,
 *   true,
 *   true
 * );
 */
export class Tab {
  private _id: string;
  private _label: string;
  private _changed: boolean;
  private _hovered: boolean;
  private _active: boolean;
  private _state: TabStatus;

  constructor(
    id: string,
    label: string,
    changed: boolean,
    hovered: boolean,
    active: boolean,
    state: TabStatus
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

  get state(): TabStatus {
    return this._state;
  }
  set state(value: TabStatus) {
    this._state = value;
  }

  // ===================================
  //            Secondary Methods
  // ===================================
}
