import React from "react";

import { Pane, Typography } from "neetoui";

import Form from "./Form";

import { INITIAL_FORM_VALUES } from "../constants";

const Create = ({ showPane, setContacts, onClose }) => {
  const { Header } = Pane;

  return (
    <Pane isOpen={showPane} onClose={onClose}>
      <Header>
        <Typography style="h2" weight="semibold">
          Add New Contact
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
