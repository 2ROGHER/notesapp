import type { TabState } from "../../../domains/dashboard/domain";
import type { IAction } from "../../../shared/interfaces";
import {
  CLOSE_TAB,
  SET_TAB_UPDATED,
  TOGGLE_TAB_ACTIVE,
  TOGGLE_TAB_HOVERED,
} from "../actions-types/";

/**
 * This function is used to close a tab, it simply returns an action object
 * with the type 'CLOSE_TAB' and an empty string as payload.
 * @param {string} s - The state of the tab that is pased for the user
 * @function closeTab
 * @returns {IAction<string>} An action object that can be used to close a tab.
 */
//

export const toggleTabActive = (id: string): IAction<any> => ({
  type: TOGGLE_TAB_ACTIVE,
  payload: { id },
});

export const toggleTabHover = (id: string, v: boolean): IAction<any> => ({
  type: TOGGLE_TAB_HOVERED,
  payload: { id, v },
});

export const setTabUpdated = (v: string): IAction<string> => ({
  type: SET_TAB_UPDATED,
  payload: v,
});

export const closeTab = (id: string, s: TabState): IAction<any> => ({
  type: CLOSE_TAB,
  payload: { id, s },
});
