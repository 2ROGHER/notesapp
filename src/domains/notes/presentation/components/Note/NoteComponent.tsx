import React, { useState, type JSX } from "react";
import type { Note } from "../../../domain";

export type NoteComponentProps = {
  note: Note;
  onInputText?: (e: any) => void;
};

/**
 * This Component represent the input text that is used to create a new note
 * New line represents a new note, this is used to calculate the number of lines and columns used to write a note.
 * When the user create a new note, or this press [enter] key, a new line is added and a  new note is created here.
 * New features here is add autocomplet functionality

 * @returns React Component
 * @author [Roger Mestanza](https://github.com/2ROGHER)
 */
export const NoteComponent: React.FC<NoteComponentProps> = ({
  note,
  onInputText = (e: any) => {},
}): JSX.Element => {
  const [n, setN] = useState({ ...note });
  return (
    <section className="note" aria-label="note-container">
      <div
        className="note-content"
        contentEditable="true"
        role="textbox"
        aria-hidden="true"
        aria-multiline="true"
        suppressContentEditableWarning={true}
        onInput={(e) => setN({ ...n, content: e.currentTarget.innerText })}
        onKeyDown={(e) => onInputText(e)}
        // data-placeholder="Type your note here..."
      >
        {note.content.length > 0 ? note.content : ""}
      </div>
    </section>
  );
};
