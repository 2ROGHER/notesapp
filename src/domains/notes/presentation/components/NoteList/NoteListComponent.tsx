import React, { type JSX } from "react";
import type { Note } from "../../../domain";
import { NoteComponent } from "../Note/NoteComponent";

export type NoteListProps = {
    notes: Note[];
}

/**
 * This component is used to list of a NoteComponent. 
 * This functionality is used to show filtered notes at view template.
 * @returns NoteComponent[]
 * @author [Roger Mestanza](https://github.com/2ROGHER)
 */
export const NoteListComponent: React.FC<NoteListProps> = ({ notes = [] }): JSX.Element => {
    return (
        <ul className="note-list">
            {notes.length > 0 && notes.map((n: Note) => (
                <li className="note-list-item" key={n.id}>
                    <NoteComponent {...n} />
                </li>
            ))}
        </ul>
    );
};

