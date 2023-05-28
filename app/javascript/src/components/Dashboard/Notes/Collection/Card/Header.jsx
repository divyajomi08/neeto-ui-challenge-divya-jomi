import React from "react";

import { MenuVertical } from "neetoicons";
import { Dropdown, Typography } from "neetoui";

const Header = ({ note }) => (
  <div className="flex justify-between gap-4">
    <Typography className="self-center" style="h3">
      {note.title}
    </Typography>
    <Dropdown
      buttonStyle="text"
      icon={() => <MenuVertical color="#68737D" size={20} />}
    >
      <Dropdown.Menu>
        <Dropdown.MenuItem.Button>Edit</Dropdown.MenuItem.Button>
        <Dropdown.MenuItem.Button style="danger">
          Delete
        </Dropdown.MenuItem.Button>
      </Dropdown.Menu>
    </Dropdown>
  </div>
);
export default Header;
