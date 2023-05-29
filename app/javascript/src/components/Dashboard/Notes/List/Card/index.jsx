import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note, setSelectedNote, setIsDeleteAlertOpen }) => {
  const { description, created_at } = note;

  return (
    <div className="neeto-ui-shadow-s flex flex-col gap-4 rounded border border-gray-300 p-4">
      <Header
        note={note}
        setIsDeleteAlertOpen={setIsDeleteAlertOpen}
        setSelectedNote={setSelectedNote}
      />
      <Body description={description} />
      <Footer createdAt={created_at} />
    </div>
  );
};

export default Card;
