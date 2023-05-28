import React, { useEffect, useState } from "react";

import EmptyNotesListImage from "images/EmptyNotesList";
import { Plus } from "neetoicons";
import { Button } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";
import { noop } from "utils";

import EmptyState from "components/commons/EmptyState";
import MenuBar from "components/commons/MenuBar";
import { PLURAL, SINGULAR } from "constants";

import { CONTACTS, MAIN_BLOCKS } from "./constant";
import ContactsTable from "./Table";

const Contacts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contacts, setContacts] = useState(CONTACTS);

  const { t } = useTranslation();

  useEffect(() => {
    setContacts(CONTACTS);
  }, []);

  return (
    <>
      <MenuBar
        mainBlocks={MAIN_BLOCKS}
        showMenu={isMenuOpen}
        title={t("common.contacts", PLURAL)}
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
          title={t("contacts.allContacts")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("contacts.addContacts")}
              size="small"
            />
          }
          searchProps={{
            placeholder: t("placeholder.search"),
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        {contacts.length ? (
          <ContactsTable />
        ) : (
          <EmptyState
            image={EmptyNotesListImage}
            primaryAction={noop}
            primaryActionLabel={t("emptyState.addNewItem", {
              item: t("common.contact", SINGULAR),
            })}
            subtitle={t("emptyState.addItemDescription", {
              item: t("common.contact", PLURAL).toLowerCase(),
            })}
            title={t("emptyState.message", {
              item: t("common.contact", PLURAL).toLowerCase(),
            })}
          />
        )}
      </Container>
    </>
  );
};
export default Contacts;
