// @ts-nocheck
import React from "react";

import { t } from "i18next";
import { MenuHorizontal } from "neetoicons";
import { Avatar, Dropdown, Typography } from "neetoui";

const {
  Menu,
  MenuItem: { Button },
} = Dropdown;

const generateAvatarImageUrl = () =>
  `https://randomuser.me/api/portraits/women/${Math.round(
    Math.random() * 10
  )}.jpg`;

const User = ({ name, title }) => (
  <div className="cursor-default">
    <Typography style="h4" type="semibold">
      {name ?? "No Name"}
    </Typography>
    <Typography className="cs-ui-text-shade-dark" style="body2">
      {title ?? "No Role"}
    </Typography>
  </div>
);

export const CONTACTS = [
  {
    id: 1,
    firstName: "Oliver",
    lastName: "Smith",
    email: "oliver.smith@gmail.com",
    role: "Owner",
    createdAt: "Feb 5, 2021",
  },
  {
    id: 2,
    firstName: "Jacob",
    lastName: "Johns",
    email: "jacob.johns@gmail.com",
    role: "Owner",
    createdAt: "Feb 5, 2021",
  },
  {
    id: 3,
    firstName: "Ronald",
    lastName: "Richard",
    email: "ronald.richard@gmail.com",
    role: "Owner",
    createdAt: "Feb 5, 2021",
  },
];

export const TABLE_COLUMNS = [
  {
    key: "name",
    title: "Name & Role",
    render: row => (
      <div className="flex items-center space-x-3">
        <Avatar
          size="large"
          user={{
            imageUrl: generateAvatarImageUrl(),
            name: row.firstName,
          }}
        />
        <User name={`${row.firstName} ${row.lastName}`} title={row.role} />
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

export const MAIN_BLOCKS = [
  { isActive: true, count: 200, label: t("common.all") },
  { isActive: false, count: 80, label: t("common.archived") },
  { isActive: false, count: 60, label: t("common.completed") },
  { isActive: false, count: 60, label: t("common.phase") },
];
