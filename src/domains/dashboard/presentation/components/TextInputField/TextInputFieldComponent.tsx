import React, { useState, type JSX } from "react";
import { parseTextToNotes } from "../../../services";

export type TextInputFieldComponentProps = {};

/**
 * This is the main container that holds the main logic for [input text field]
 *
 * @returns JSX.Element
 */
export const TextInputFieldComponent: React.FC<
  TextInputFieldComponentProps
> = (): JSX.Element => {
  // This array is used to render a list of notes into text editor
  // TODO("Here we need to use dispatch and store to add and get notes from state")
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const[text, setText] = useState("");

  const handleKeyDown = (e: any): void => {};

  const handleTextInput = (e: React.FormEvent<HTMLDivElement>): void => {
    const rawText = e.currentTarget.innerText;
    const textArray = text.split("\n");
    setRow(textArray.length);
    setCol(textArray[textArray.length - 1].length);

    
    setText(rawText);
    const notes = parseTextToNotes(rawText);
    console.log(notes);
    // Here we can dispatch an action to add notes to the state
  };

  return (
    <aside className="text-area" aria-label="text-area">
      <div 
        className="text-area-box"
        contentEditable='true'
        role="textbox"
        aria-hidden="true"
        aria-multiline="true"
        suppressContentEditableWarning={true}
        onInput={(e) => handleTextInput(e)}
      >

      </div>

      <pre>{row}:{col}</pre>
    </aside>
  );
};
