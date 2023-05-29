import React from "react";

import { t } from "i18next";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown } from "neetoui";

import Profile from "./Profile";

const {
  Menu,
  MenuItem: { Button },
} = Dropdown;

export const CURRENT_PAGE_NUMBER = 1;
export const DEFAULT_PAGE_SIZE = 10;

export const COLUMN_DATA = [
  {
    key: "name",
    title: "Name & Role",
    render: row => (
      <div className="flex items-center space-x-3">
        <Avatar
          size="large"
          user={{
            imageUrl: row.profileImageUrl,
            name: row.name,
          }}
        />
        <Profile name={row.name} title={row.role} />
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
    dataIndex: "action",
    key: "action",
    align: "right",
    render: () => (
      <Dropdown buttonStyle="text" icon={MenuHorizontal}>
        <Menu>
          <Button>{t("common.edit")}</Button>
          <Button style="danger">{t("common.delete")}</Button>
        </Menu>
      </Dropdown>
    ),
  },
];
