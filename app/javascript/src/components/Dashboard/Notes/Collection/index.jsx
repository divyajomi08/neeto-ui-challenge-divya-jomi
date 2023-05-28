import React from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { useTranslation } from "react-i18next";
import { isNotPresent, noop } from "utils";

import EmptyState from "components/commons/EmptyState";
import { PLURAL, SINGULAR } from "constants";

import Card from "./Card";

const Collection = ({ notes = [], setSelectedNote, setIsDeleteAlertOpen }) => {
  const { t } = useTranslation();

  if (isNotPresent(notes)) {
    return (
      <EmptyState
        image={EmptyNotesListImage}
        primaryAction={noop}
        primaryActionLabel={t("emptyState.addNewItem", {
          item: t("common.note", SINGULAR),
        })}
        subtitle={t("emptyState.addItemDescription", {
          item: t("common.note", PLURAL).toLowerCase(),
        })}
        title={t("emptyState.message", {
          item: t("common.note", PLURAL),
        }).toLowerCase()}
      />
    );
  }

  return (
    <div className="mt-8 flex w-full flex-col gap-4">
      {notes.map(note => (
        <Card
          key={note.id}
          note={note}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          setSelectedNote={setSelectedNote}
        />
      ))}
    </div>
  );
};

export default Collection;
