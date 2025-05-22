import React, { useState, type JSX } from "react";

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

  const handleKeyDown = (e: any): void => {};
  const handleTextInput = (): void => {};

  return (
    <aside className="text-area" aria-label="text-area">
      
    </aside>
  );
};
