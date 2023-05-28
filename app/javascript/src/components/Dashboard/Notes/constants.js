import * as yup from "yup";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const NOTES_TABLE_COLUMN_DATA = [
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
    width: "30%",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
    width: "70%",
  },
];

export const SEGMENT_BLOCKS = [
  { count: 80, label: "Europe" },
  { count: 60, label: "Middle-East" },
  { count: 60, label: "Asia" },
];

export const TAG_BLOCKS = [
  { count: 80, label: "Sales" },
  { count: 60, label: "Finance" },
  { count: 60, label: "User Experience" },
];

export const MAIN_BLOCKS = [
  { isActive: true, count: 200, label: "All" },
  { isActive: false, count: 80, label: "Users" },
  { isActive: false, count: 60, label: "Leads" },
  { isActive: false, count: 60, label: "Visitors" },
];

export const AVATAR_IMAGE_URL =
  "https://randomuser.me/api/portraits/women/90.jpg";
