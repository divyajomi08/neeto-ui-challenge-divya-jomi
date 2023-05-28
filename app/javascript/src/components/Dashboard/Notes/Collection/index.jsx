import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";

import EmptyState from "components/commons/EmptyState";

import Card from "./Card";

const Collection = ({ notes, setShowNewNotePane }) =>
  notes.length ? (
    <div className="mt-8 flex flex-col gap-4">
      {notes.map(note => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  ) : (
    <EmptyState
      image={EmptyNotesListImage}
      primaryAction={() => setShowNewNotePane(true)}
      primaryActionLabel="Add new note"
      subtitle="Add your notes to send customized emails to them."
      title="Looks like you don't have any notes!"
    />
  );

export default Collection;
