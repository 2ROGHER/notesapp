import type { Action } from "redux";
import { Note } from "../../../domains/notes/domain";
import { ADD_NOTE } from "../actions-types";
import type { NotesState } from "../types/state/";

const initialState: NotesState<Note> = {
  notes: [],
};

export const notesReducer = (
  state = initialState,
  action: Action<Note | any>
): NotesState<Note> => {
  switch (action.type) {
    case ADD_NOTE:
      return {
        ...state,
        notes: [],
      };
    default:
      return state;
  }
};
