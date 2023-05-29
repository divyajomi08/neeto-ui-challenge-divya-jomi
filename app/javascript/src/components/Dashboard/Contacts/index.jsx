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
import ContactsTable from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <Button icon={Plus} label={t("contacts.addContact")} size="small" />
          }
          searchProps={{
            placeholder: t("placeholder.search"),
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {ROW_DATA.length ? (
          <ContactsTable contacts={ROW_DATA} />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={noop}
            primaryActionLabel={t("emptyState.contacts.addNewContact")}
            subtitle={t("emptyState.contacts.description")}
            title={t("emptyState.contacts.message")}
          />
        )}
      </Container>
    </>
  );
};
export default Contacts;
