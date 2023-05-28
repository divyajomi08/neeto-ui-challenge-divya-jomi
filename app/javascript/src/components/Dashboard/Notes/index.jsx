import React, { useState, useEffect } from "react";

import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";

import Collection from "./Collection";
import { MAIN_BLOCKS, SEGMENT_BLOCKS, TAG_BLOCKS } from "./constants";

import MenuBar from "../../commons/MenuBar";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [notes, setNotes] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { t } = useTranslation();

  const fetchNotes = async () => {
    try {
      setIsLoading(true);
      const {
        data: { notes },
      } = await notesApi.fetch();
      setNotes(notes);
    } catch (error) {
      logger.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <>
      <MenuBar
        mainBlocks={MAIN_BLOCKS}
        segmentBlocks={SEGMENT_BLOCKS}
        showMenu={isMenuOpen}
        tagBlocks={TAG_BLOCKS}
        title={t("common.notes")}
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
          title={t("notes.allNotes")}
          actionBlock={
            <Button icon={Plus} label={t("notes.addNote")} size="small" />
          }
          searchProps={{
            placeholder: t("notes.searchNotes"),
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Collection notes={notes} />
      </Container>
    </>
  );
};

export default Notes;
