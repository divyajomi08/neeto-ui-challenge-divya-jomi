import React from "react";

import { Clock } from "neetoicons";
import { Avatar, Tag, Typography, Tooltip } from "neetoui";
import { dateWeekTime, elapsedTime } from "utils";

import { AVATAR_IMAGE_URL } from "../../constants";

const Footer = ({ createdAt }) => (
  <div className="flex flex-row justify-between">
    <Tag label="Getting Started" style="secondary" type="solid" />
    <div className="flex gap-1">
      <Clock className="self-center text-gray-500" size={12} />
      <Tooltip content={dateWeekTime(createdAt)} position="bottom-end">
        <div className="self-center">
          <Typography style="body3">
            Created&nbsp;{elapsedTime(createdAt)}&nbsp;ago
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

export default Footer;
