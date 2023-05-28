import React, { useState, useEffect } from "react";

import { Plus } from "neetoicons";
import { Button, PageLoader } from "neetoui";
import { Container, Header } from "neetoui/layouts";
import { useTranslation } from "react-i18next";

import notesApi from "apis/notes";
import DeleteAlert from "components/commons/DeleteAlert";
import { PLURAL, SINGULAR } from "constants";

import Collection from "./Collection";
import { MAIN_BLOCKS, SEGMENT_BLOCKS, TAG_BLOCKS } from "./constants";
import NewNotePane from "./Pane/Create";

import MenuBar from "../../commons/MenuBar";

const Notes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [notes, setNotes] = useState([]);
  const [isNewNotePaneOpen, setIsNewNotePaneOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [selectedNote, setSelectedNote] = useState({});

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

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await notesApi.destroy({ ids: [selectedNote.id] });
      setSelectedNote({});
      fetchNotes();
    } catch (error) {
      logger.error(error);
    } finally {
      setIsDeleting(false);
      setIsDeleteAlertOpen(false);
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
        title={t("common.note", PLURAL)}
      />
      <Container>
        <Header
          menuBarToggle={() => setIsMenuOpen(isMenuOpen => !isMenuOpen)}
          title={t("notes.allNotes")}
          actionBlock={
            <Button
              icon={Plus}
              label={t("notes.addNote")}
              size="small"
              onClick={() => setIsNewNotePaneOpen(true)}
            />
          }
          searchProps={{
            placeholder: t("notes.searchNotes"),
            value: searchTerm,
            onChange: e => setSearchTerm(e.target.value),
          }}
        />
        <Collection
          notes={notes}
          setIsDeleteAlertOpen={setIsDeleteAlertOpen}
          setSelectedNote={setSelectedNote}
        />
        <NewNotePane
          fetchNotes={fetchNotes}
          setShowPane={setIsNewNotePaneOpen}
          showPane={isNewNotePaneOpen}
        />
        <DeleteAlert
          handleDelete={handleDelete}
          isOpen={isDeleteAlertOpen}
          isSubmitting={isDeleting}
          item={t("common.note", SINGULAR)}
          itemName={selectedNote.title}
          onClose={() => setIsDeleteAlertOpen(false)}
        />
      </Container>
    </>
  );
};

export default Notes;
