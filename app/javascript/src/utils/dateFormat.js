import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

export const elapsedTime = date => dayjs(date).fromNow();

export const dateWeekTime = date => dayjs(date).format("dddd, h:mmA");
