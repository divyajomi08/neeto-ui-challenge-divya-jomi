import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Typography } from "neetoui";
import { useTranslation } from "react-i18next";

const Header = ({ note }) => {
  const { t } = useTranslation();

  return (
    <div className="flex justify-between gap-4">
      <Typography className="self-center" style="h3">
        {note.title}
      </Typography>
      <Dropdown
        buttonStyle="text"
        icon={() => <MenuVertical color="#68737D" size={20} />}
      >
        <Dropdown.Menu>
          <Dropdown.MenuItem.Button>
            {t("common.edit")}
          </Dropdown.MenuItem.Button>
          <Dropdown.MenuItem.Button style="danger">
            {t("common.delete")}
          </Dropdown.MenuItem.Button>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};
export default Header;
