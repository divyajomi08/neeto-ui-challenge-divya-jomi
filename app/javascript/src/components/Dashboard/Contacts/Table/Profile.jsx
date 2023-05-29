import React from "react";

import { Typography } from "neetoui";

const Profile = ({ name, title }) => (
  <div className="flex flex-col">
    <Typography style="h4" type="semibold">
      {name}
    </Typography>
    <Typography style="body2">{title}</Typography>
  </div>
);

export default Profile;
