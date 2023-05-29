import React from "react";

import { Pane, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../constants";

const { Header } = Pane;

const Create = ({ showPane, setContacts, onClose }) => {
  const { t } = useTranslation();

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Header>
        <Typography style="h2" weight="semibold">
          {t("contacts.addNewContact")}
        </Typography>
      </Header>
      <Form
        initialValues={INITIAL_FORM_VALUES}
        setContacts={setContacts}
        onClose={onClose}
      />
    </Pane>
  );
};

export default Create;
