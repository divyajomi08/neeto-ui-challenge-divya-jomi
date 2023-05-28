import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { NOTES_FORM_INITIAL_FORM_VALUES } from "../constants";

export const Create = ({ fetchNotes, showPane, setShowPane }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  const { Header } = Pane;

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Header>
        <Typography style="h2" weight="semibold">
          {t("notes.addNewNote")}
        </Typography>
      </Header>
      <Form
        isEdit={false}
        note={NOTES_FORM_INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
