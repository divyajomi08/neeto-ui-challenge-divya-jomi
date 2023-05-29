import { t } from "i18next";
import * as yup from "yup";

export const VALIDATION_SCHEMA = yup.object({
  firstName: yup.string().required(t("validation.firstName")),
  lastName: yup.string().required(t("validation.lastName")),
  email: yup
    .string()
    .email(t("validation.validEmail"))
    .required(t("validation.email")),
  role: yup
    .object()
    .shape({ label: yup.string(), value: yup.string() })
    .nullable()
    .required(t("validation.role")),
});

export const ROLES = [
  {
    label: "Admin",
    value: "admin",
  },
  {
    label: "Owner",
    value: "owner",
  },
];
