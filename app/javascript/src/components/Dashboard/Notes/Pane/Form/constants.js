import { t } from "i18next";
import * as yup from "yup";

export const VALIDATION_SCHEMA = yup.object({
  title: yup.string().required(t("validation.title")),
  description: yup.string().required(t("validation.description")),
  contact: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(t("validation.contact")),
  tags: yup
    .array()
    .of(yup.object().shape({ label: yup.string(), value: yup.string() }))
    .min(1, t("validation.tag"))
    .required(t("validation.tag")),
});

export const TAGS = [
  {
    label: "Getting Started",
    value: "getting_started",
  },
  {
    label: "Onboarding",
    value: "Onboarding",
  },
  {
    label: "User Flow",
    value: "user_flow",
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

export const CONTACTS = [
  { label: "Oliver Smith", value: "523621a4-ac39-48e5-8d86-eba9310d2055" },
  { label: "Eve Smith", value: "523621a4-ac39-48e5-8d86-eba9310d5098" },
  { label: "Sam Smith", value: "523621a4-ac39-48e5-8d86-eba9310d5685" },
];
