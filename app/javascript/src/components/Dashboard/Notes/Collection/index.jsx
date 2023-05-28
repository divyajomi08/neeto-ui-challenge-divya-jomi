import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { useTranslation } from "react-i18next";

import EmptyState from "components/commons/EmptyState";

import Card from "./Card";

const Collection = ({ notes, setShowNewNotePane }) => {
  const { t } = useTranslation();

  return notes.length ? (
    <div className="mt-8 flex flex-col gap-4">
      {notes.map(note => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  ) : (
    <EmptyState
      image={EmptyNotesListImage}
      primaryAction={() => setShowNewNotePane(true)}
      primaryActionLabel={t("emptyState.addNewNotes")}
      subtitle={t("emptyState.addNotesDescription")}
      title={t("emptyState.emptyNotes")}
    />
  );
};

export default Collection;
