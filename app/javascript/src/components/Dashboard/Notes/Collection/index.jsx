import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { useTranslation } from "react-i18next";
import { isNotPresent, noop } from "utils";

import EmptyState from "components/commons/EmptyState";

import Card from "./Card";

const Collection = ({ notes }) => {
  const { t } = useTranslation();

  if (isNotPresent(notes)) {
    return (
      <EmptyState
        image={EmptyNotesListImage}
        primaryAction={noop}
        primaryActionLabel={t("emptyState.addNewNotes")}
        subtitle={t("emptyState.addNotesDescription")}
        title={t("emptyState.emptyNotes")}
      />
    );
  }

  return (
    <div className="mt-8 flex w-full flex-col gap-4">
      {notes.map(note => (
        <Card key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Collection;
