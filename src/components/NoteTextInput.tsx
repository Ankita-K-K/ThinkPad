"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { debounceTimeout } from "@/lib/constants";
import useNote from "@/hooks/useNotes";
import { updateNoteAction } from "@/actions/notes";

type Props = {
  noteId: string;
  startingNoteText: string;
};

let updateTimeout: NodeJS.Timeout;

const NoteTextInput = ({ noteId, startingNoteText }: Props) => {
  const noteIdparam = useSearchParams().get("noteId") || "";
  const { noteText, setNoteText } = useNote();

  useEffect(() => {
    if (noteIdparam == noteId) {
      setNoteText(startingNoteText);
    }
  }, [startingNoteText, noteIdparam, noteId, setNoteText]);

  const handleUpdateNote = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value;
    setNoteText(text);

    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
      updateNoteAction(noteId, text);
    }, debounceTimeout);
  };
  return (
    <Textarea
      value={noteText}
      onChange={handleUpdateNote}
      placeholder="Type your notes here.."
      className="custom-scrollbar placeholder: text-muted-foreground focus-visible: focus-visible: mb-4 h-full max-w-4xl resize-none border p-4 ring-0 ring-offset-0"
    />
  );
};

export default NoteTextInput;
