import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

const {
  Menu,
  MenuItem: { Button },
} = Dropdown;

const Header = ({ note, setSelectedNote, setIsDeleteAlertOpen }) => {
  const { t } = useTranslation();

  const { title } = note;

  const handleDelete = () => {
    setSelectedNote(note);
    setIsDeleteAlertOpen(true);
  };

  return (
    <div className="flex justify-between gap-4">
      <Typography className="self-center" style="h3">
        {title}
      </Typography>
      <Dropdown buttonStyle="text" icon={MenuVertical}>
        <Menu>
          <Button>{t("common.edit")}</Button>
          <Button style="danger" onClick={handleDelete}>
            {t("common.delete")}
          </Button>
        </Menu>
      </Dropdown>
    </div>
  );
};
export default Header;
