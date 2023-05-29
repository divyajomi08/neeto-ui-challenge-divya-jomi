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

export const buildColumnData = handleDelete => [
  {
    key: "name",
    title: t("common.nameAndRole"),
    render: row => (
      <div className="flex items-center space-x-3">
        <Avatar
          size="large"
          user={{
            imageUrl: row.profileImageUrl,
            name: getFullName({
              firstName: row.firstName,
              lastName: row.lastName,
            }),
          }}
        />
        <Profile
          title={row.role}
          name={getFullName({
            firstName: row.firstName,
            lastName: row.lastName,
          })}
        />
      </div>
    ),
  },
  {
    dataIndex: "email",
    key: "email",
    title: t("common.email"),
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: t("common.createdAt"),
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
