import React from "react";

import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";

const Card = ({ note }) => {
  const { id, description, created_at } = note;

  return (
    <div
      className="neeto-ui-shadow-s flex flex-col gap-4 rounded border border-gray-300 p-4"
      key={id}
    >
      <Header note={note} />
      <Body description={description} />
      <Footer createdAt={created_at} />
    </div>
  );
};

export default Card;
