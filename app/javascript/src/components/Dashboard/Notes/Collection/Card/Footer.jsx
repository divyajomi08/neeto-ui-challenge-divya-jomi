import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tag, Typography, Tooltip } from "neetoui";
import { useTranslation } from "react-i18next";
import { dateWeekTime, elapsedTime } from "utils";

import { AVATAR_IMAGE_URL } from "../../constants";

const Footer = ({ createdAt }) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-row justify-between">
      <Tag label="Getting Started" style="secondary" type="solid" />
      <div className="flex gap-1">
        <Clock className="self-center text-gray-500" size={12} />
        <Tooltip content={dateWeekTime(createdAt)} position="bottom-end">
          <div className="self-center">
            <Typography style="body3">
              {t("common.elapsedTime", { time: elapsedTime(createdAt) })}
            </Typography>
          </div>
        </Tooltip>
        <Avatar
          className="self-center"
          size="small"
          user={{
            imageUrl: AVATAR_IMAGE_URL,
            name: "avatar",
          }}
        />
      </div>
    </div>
  );
};

export default Footer;
