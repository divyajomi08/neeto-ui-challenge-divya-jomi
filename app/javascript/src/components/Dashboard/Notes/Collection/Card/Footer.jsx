import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tag, Typography, Tooltip } from "neetoui";
import { useTranslation } from "react-i18next";

import { getDateWeekTime, getElapsedTime } from "utils/dateFormat";

import { DEFAULT_USER_AVATAR } from "../../constants";

const Footer = ({ createdAt }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-between">
      <Tag label={t("common.gettingStarted")} style="secondary" type="solid" />
      <div className="flex items-center gap-1">
        <Clock size={12} />
        <Tooltip content={getDateWeekTime(createdAt)} position="bottom-end">
          <Typography style="body3">
            {t("common.elapsedTime", { time: getElapsedTime(createdAt) })}
          </Typography>
        </Tooltip>
        <Avatar size="small" user={DEFAULT_USER_AVATAR} />
      </div>
    </div>
  );
};

export default Footer;
