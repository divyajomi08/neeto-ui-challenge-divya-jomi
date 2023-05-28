import { t } from "i18next";

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
    dataIndex: "name",
    key: "name",
    title: "Name & Role",
    width: 75,
  },
  {
    dataIndex: "email",
    key: "email",
    title: "Email",
    width: 75,
  },
  {
    dataIndex: "createdAt",
    key: "createdAt",
    title: "Created At",
    width: 75,
  },
  {
    dataIndex: "action",
    key: "action",
    width: 150,
  },
];

export const MAIN_BLOCKS = [
  { isActive: true, count: 200, label: t("common.all") },
  { isActive: false, count: 80, label: t("common.archived") },
  { isActive: false, count: 60, label: t("common.completed") },
  { isActive: false, count: 60, label: t("common.phase") },
];
