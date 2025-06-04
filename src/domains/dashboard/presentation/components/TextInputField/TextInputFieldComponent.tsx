import "./TextInputFieldComponent.scss";

import React, { useEffect, useRef, useState, type JSX } from "react";
import { parseTextToNotes } from "../../../services";

export type TextInputFieldComponentProps = {};

/**
 * This is the main container that holds the main logic for [input text field]
 * It is used to handle the state of the text input field and render the text editor
 * @returns JSX.Element
 */
export const TextInputFieldComponent: React.FC<
  TextInputFieldComponentProps
> = (): JSX.Element => {
  // This array is used to render a list of notes into text editor
  // TODO("Here we need to use dispatch and store to add and get notes from state")
  const [row, setRow] = useState(0);
  const [col, setCol] = useState(0);
  const [text, setText] = useState("");

  const textRef = useRef<HTMLDivElement>(null); // This [hook] is used to get the reference of the text input field
  useEffect(() => {
    if (textRef.current) {
      textRef.current.focus(); // Focus the text input field when the component is mounted
    }
  }, []);

  /**
   * This function is called when the user types something into the text field
   * It is used to set the state of the row and column of the text field
   * It also parses the text into notes and stores them in state
   * @param {React.FormEvent<HTMLDivElement>} e the event that is triggered when the user types something into the text field
   */
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
        contentEditable="true"
        role="textbox"
        aria-hidden="true"
        aria-multiline="true"
        suppressContentEditableWarning={true}
        onInput={(e) => handleTextInput(e)}
        ref={textRef}
      ></div>
    </aside>
  );
};
