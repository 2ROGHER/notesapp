import type { Note } from "../../../notes";
import { Tab } from "../Tab";

export type DashboardState = {
  header: {
    title: string;
    tabs: Tab[];
  };
  tools: {
    updated: boolean;
  };
  body: {
    notes: Note[];
    editionTools: [
      colorTool: string[],
      fontsTools: {
        fontFamily: string[];
        fontSize: number[];
        bgImage: string[],
      },
      alignTools: {
        align: string[];
      },

    ]
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
