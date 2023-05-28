import { t } from "i18next";
import * as yup from "yup";

const AVATAR_IMAGE_URL = "https://randomuser.me/api/portraits/women/90.jpg";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object().shape({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
});

export const SEGMENT_BLOCKS = [
  { count: 80, label: t("notes.segments.europe") },
  { count: 60, label: t("notes.segments.middleEast") },
  { count: 60, label: t("notes.segments.asia") },
];

export const TAG_BLOCKS = [
  { count: 80, label: t("notes.tags.sales") },
  { count: 60, label: t("notes.tags.finance") },
  { count: 60, label: t("notes.tags.userExperience") },
];

export const MAIN_BLOCKS = [
  { isActive: true, count: 200, label: t("common.all") },
  { isActive: false, count: 80, label: t("common.users") },
  { isActive: false, count: 60, label: t("common.leads") },
  { isActive: false, count: 60, label: t("common.visitors") },
];

export const DEFAULT_USER_AVATAR = {
  imageUrl: AVATAR_IMAGE_URL,
  name: "avatar",
};
