import { Note, NoteStatus } from "../../notes";
import { v4 } from "uuid";
/**
 * This function checks if the given text is a list block.
 * A list block is defined as a line that starts with a number followed by a dot or parenthesis, or a hyphen, asterisk, or bullet point.
 * @param text
 * @returns boolean
 */
export const isListBlock = (text: string): boolean => {
  return /^(\s*\d+[\.\)]|\s*[-*•>_+)])\s/.test(text.trim());
  //   return /^(\s*\d+[\.\)]|\s*[-*•])\s/.test(text.trim());// This regex is used to check if the text is a list block
};

export const parseTextToNotes = (rawText: string): Note[] => {
  const notes = rawText.split(/\n+/); // This method allows us to have multiple empty lines

  return notes
    .map((noteText, index) => {
      const trimmedText = noteText.trim();
      if (trimmedText.length === 0) {
        return null; // Skip empty notes
      }

      return new Note(
        v4(), // Generate a unique ID for each note
        `Note ${index + 1}`,
        trimmedText,
        [], // Background images can be added later
        new Set(), // Colors can be added later
        NoteStatus.ACTIVE, // Default status
        new Date(),
        new Date(),
        new Date(),
        new Map() // Attributes can be added later
      );
    })
    .filter((note) => note !== null); // Filter out null values this is a workaround
};
