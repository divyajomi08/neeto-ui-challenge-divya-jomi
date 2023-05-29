import React, { useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { noop } from "utils";

import EmptyState from "components/commons/EmptyState";
import MenuBar from "components/commons/MenuBar";
import { PLURAL } from "constants";

import { MAIN_BLOCKS, ROW_DATA } from "./constants";
import NewContactPane from "./Pane/Create";
import ContactsTable from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNewContactPaneOpen, setIsNewContactPaneOpen] = useState(false);
  const [contacts, setContacts] = useState(ROW_DATA);

  const { t } = useTranslation();

  return (
    <>
      <MenuBar
        mainBlocks={MAIN_BLOCKS}
        showMenu={isMenuOpen}
        title={t("common.contact", PLURAL)}
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
          title={t("contacts.allContacts")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("contacts.addContact")}
              size="small"
              onClick={() => setIsNewContactPaneOpen(true)}
            />
          }
          searchProps={{
            placeholder: t("placeholder.search"),
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length ? (
          <ContactsTable contacts={contacts} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={noop}
            primaryActionLabel={t("emptyState.contacts.addNewContact")}
            subtitle={t("emptyState.contacts.description")}
            title={t("emptyState.contacts.message")}
          />
        )}
        <NewContactPane
          setContacts={setContacts}
          showPane={isNewContactPaneOpen}
          onClose={() => setIsNewContactPaneOpen(false)}
        />
      </Container>
    </>
  );
};
export default Contacts;
