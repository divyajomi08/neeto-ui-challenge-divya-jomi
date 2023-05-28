import { t } from "i18next";
import * as yup from "yup";

const AVATAR_IMAGE_URL = "https://randomuser.me/api/portraits/women/90.jpg";

export const NOTES_FORM_INITIAL_FORM_VALUES = {
  title: "",
  description: "",
  role: "",
  tags: [],
};

export const NOTES_FORM_VALIDATION_SCHEMA = yup.object({
  title: yup.string().required(t("validation.title")),
  description: yup.string().required(t("validation.description")),
  role: yup.object().required(t("validation.role")),
  tags: yup.array().min(1, t("validation.tag")).required(t("validation.tag")),
});

export const TAGS = [
  {
    label: "Getting Started",
    value: "gettingStarted",
  },
  {
    label: "Onboarding",
    value: "Onboarding",
  },
  {
    label: "User Flow",
    value: "userFlow",
  },
  {
    label: "UX",
    value: "ux",
  },
  {
    label: "Bugs",
    value: "bugs",
  },
  {
    label: "V2",
    value: "v2",
  },
];

export const ROLES = [
  { label: "Oliver Smith", value: "523621a4-ac39-48e5-8d86-eba9310d2055" },
  { label: "Eve Smith", value: "523621a4-ac39-48e5-8d86-eba9310d5098" },
  { label: "Sam Smith", value: "523621a4-ac39-48e5-8d86-eba9310d5685" },
];

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
