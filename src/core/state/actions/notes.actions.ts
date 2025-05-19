import type { Note } from "../../../domains/notes/domain";
import type { Action } from "../../../shared/types";
import { ADD_NOTE } from "../actions-types";

export const addNote = (note: Note): Action<Note> => ({
    type: ADD_NOTE,
    payload: note
});