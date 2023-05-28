import React from "react";

import { Typography } from "neetoui";

const Body = ({ description }) => (
  <div className="flex flex-col gap-4">
    <Typography className="text-gray-500">{description}</Typography>
    <hr className="bg-gray-300" />
  </div>
);

export default Body;
