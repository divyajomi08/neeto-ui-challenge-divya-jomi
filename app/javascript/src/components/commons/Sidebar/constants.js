import { t } from "i18next";
import { Text, Settings, UserCircle } from "neetoicons";

import { PLURAL } from "constants";

export const APP_NAME = "Wheel";

export const PASSWORD_PATH = "/my/password/edit";
export const PROFILE_PATH = "/my/profile";
export const LOGOUT_PATH = "/logout";

export const SIDEBAR_NAV_LINKS = [
  {
    label: t("common.note", PLURAL),
    to: "/notes",
    icon: Text,
  },
  {
    label: t("common.contact", PLURAL),
    to: "/contacts",
    icon: UserCircle,
  },
  {
    label: t("common.settings"),
    to: "/settings",
    icon: Settings,
  },
];
