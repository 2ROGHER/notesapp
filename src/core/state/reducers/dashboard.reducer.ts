import type { DashboardState } from "../../../domains/dashboard";
import { Tab } from "../../../domains/dashboard/domain";
import type { Action } from "../../../shared/types";

const initialState: DashboardState | any = {
  header: {
    title: "Dashboard",
    subtitle: "Welcome to your dashboard",
    tabs: [],
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
    default:
      return state;
  }
};
