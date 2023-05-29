import { t } from "i18next";
import { isEven } from "utils";

const PROFILE_IMAGE_URL = `https://picsum.photos/300`;

export const ROW_DATA = Array.from({ length: 14 }, (_, index) => ({
  id: index + 1,
  name: isEven(index) ? "Jacob Jones" : "Ronald Richards",
  email: "albert@borer.com",
  createdAt: "Feb 5, 2021",
  role: "owner",
  profileImageUrl: isEven(index) && PROFILE_IMAGE_URL,
}));

export const MAIN_BLOCKS = [
  { isActive: true, count: 200, label: t("common.all") },
  { isActive: false, count: 80, label: t("common.archived") },
  { isActive: false, count: 60, label: t("common.completed") },
  {
    isActive: false,
    count: 60,
    label: t("common.phaseWithNumber", { number: 2 }),
  },
];
