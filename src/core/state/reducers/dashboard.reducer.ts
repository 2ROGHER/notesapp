import type { DashboardState } from "../../../domains/dashboard";
import { Tab } from "../../../domains/dashboard/domain";
import type { Action } from "../../../shared/types";
import { v4 } from "uuid";
import {
  CLOSE_TAB,
  TOGGLE_TAB_HOVERED,
  TOGGLE_TAB_ACTIVE,
} from "../actions-types";

const initialState: DashboardState | any = {
  header: {
    title: "Dashboard",
    tabs: [
      new Tab(v4(), "text.md", true, false, false, true), // [state] represent with [tre] if this tab is open
      new Tab(v4(), "another.md", true, false, false, true),
      new Tab(v4(), "text.js", true, false, false, true),
      new Tab(v4(), "bundle.js", true, false, false, true),
      new Tab(v4(), "index.html", true, false, false, true),
    ],
  },
  tools: {
    updated: false,
  },
  body: {
    notes: [],
  },
  footer: {
    left: {
      cols: 0, // initial column count
      row: 0, // initial row  count
    },
    right: {
      zoom: "100%",
      e2eLine: "windows (CRLF)",
      encoding: "UTF-8",
    },
  },
};

export const dashboardReducer = (
  state = initialState,
  action: Action<any> | any
): any => {
  switch (action.type) {
    case TOGGLE_TAB_HOVERED:
      return {
        ...state,
        header: {
          ...state.header,
          tabs: state.header.tabs.map((tab: Tab) => {
            if (tab.id == action.payload.id) {
              // Here we need to return a Tab instance
              return new Tab(
                tab.id,
                tab.label,
                tab.changed,
                action.payload.v,
                tab.active,
                tab.state
              );
            } else {
              return tab;
            }
          }),
        },
      };

    case TOGGLE_TAB_ACTIVE:
      return {
        ...state,
        header: {
          ...state.header,
          tabs: state.header.tabs.map((tab: Tab) => {
            if (tab.id == action.payload.id) {
              return new Tab(
                tab.id,
                tab.label,
                tab.changed,
                tab.hovered,
                !tab.active, // [!tab.active] represent with [false] if this tab is active toggle is important
                tab.state
              );
            } else {
              return new Tab(
                tab.id,
                tab.label,
                tab.changed,
                tab.hovered,
                false, // we need to set this active to [false]
                tab.state
              );
            }
          }),
        },
      };

    case CLOSE_TAB:
      return {
        ...state,
        header: {
          ...state.header,
          tabs: state.header.tabs.map((tab: Tab) =>
            tab.id == action.payload.id
              ? new Tab(
                  tab.id,
                  tab.label,
                  tab.changed,
                  tab.hovered,
                  tab.active, // [!tab.active] represent with [false] if this tab is active toggle is important
                  action.payload.v
                )
              : tab
          ),
        },
      };
    default:
      return state;
  }
};
