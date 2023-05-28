import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import updateLocale from "dayjs/plugin/updateLocale";
import * as R from "ramda";

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

export const isPresent = R.pipe(R.either(R.isNil, R.isEmpty), R.not);

export const elapsedTime = date => dayjs(date).fromNow();

export const dateWeekTime = date => dayjs(date).format("dddd, h:mmA");
