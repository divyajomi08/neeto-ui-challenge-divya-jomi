import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../constants";

const { Header } = Pane;

export const Create = ({ fetchNotes, showPane, setShowPane }) => {
  const { t } = useTranslation();

  const onClose = () => setShowPane(false);

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Header>
        <Typography style="h2" weight="semibold">
          {t("notes.addNewNote")}
        </Typography>
      </Header>
      <Form
        isEdit={false}
        note={INITIAL_FORM_VALUES}
        refetch={fetchNotes}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
