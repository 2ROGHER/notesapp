import type { FilterState } from "../../core/state/types/state/filter-state.types";
import type { NotesState } from "../../core/state/types/state/notes-state.types";


// Generic AppStat type
// export type AppState <T> = {
//     notes: T[];
// }
export type AppState<T> = NotesState<T> & FilterState<T>;