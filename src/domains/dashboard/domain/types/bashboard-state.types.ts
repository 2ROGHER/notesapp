import type { Note } from "../../../notes";

export type DashboardState = {
  header: {
    title: string;
    subtitle: string;
  };
  tools: {
    updated: boolean;
  };
  body: {
    notes: Note[];
  };
  footer: {
    left: {
      cols: number;
      row: number;
    };
    right: {
      zoom: string;
      e2eLine: string;
      encoding: string;
    };
  };
};
