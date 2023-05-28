import dayjs from "dayjs";

export const getElapsedTime = date => dayjs(date).fromNow();

export const getDateWeekTime = date => dayjs(date).format("dddd, h:mmA");
