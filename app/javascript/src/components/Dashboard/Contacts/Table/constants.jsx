import React from "react";

import { t } from "i18next";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown } from "neetoui";
import { getFullName } from "utils";

import Profile from "./Profile";

const {
  Menu,
  MenuItem: { Button },
} = Dropdown;

export const CURRENT_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const COLUMN_DATA = handleDelete => [
  {
    key: "name",
    title: "Name & Role",
    render: row => (
      <div className="flex items-center space-x-3">
        <Avatar
          size="large"
          user={{
            imageUrl: row.profileImageUrl,
            name: getFullName(row.firstName, row.lastName),
          }}
        />
        <Profile
          name={getFullName(row.firstName, row.lastName)}
          title={row.role}
        />
      </div>
    ),
  },
  {
    dataIndex: "email",
    key: "email",
    title: "Email",
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: "Created At",
  },
  {
    key: "action",
    align: "right",
    render: row => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <Menu>
          <Button>{t("common.edit")}</Button>
          <Button style="danger" onClick={() => handleDelete(row)}>
            {t("common.delete")}
          </Button>
        </Menu>
      </Dropdown>
    ),
  },
];
