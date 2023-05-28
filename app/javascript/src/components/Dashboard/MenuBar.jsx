import React, { useState } from "react";

import { Plus, Search, Settings } from "neetoicons";
import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import { v4 as uuid } from "uuid";

const MenuBar = ({ showMenu, mainBlocks, segmentBlocks, tagBlocks }) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  return (
    <div className="flex">
      <NeetoUIMenuBar showMenu={showMenu} title="Notes">
        {mainBlocks.map(({ label, isActive, count }) => (
          <NeetoUIMenuBar.Block
            active={isActive}
            count={count}
            key={uuid()}
            label={label}
          />
        ))}
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () => setIsSearchCollapsed(!isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Segments
          </Typography>
        </NeetoUIMenuBar.SubTitle>
        <NeetoUIMenuBar.Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {segmentBlocks.map(({ label, count }) => (
          <NeetoUIMenuBar.Block count={count} key={uuid()} label={label} />
        ))}
        <NeetoUIMenuBar.SubTitle
          iconProps={[
            {
              icon: Search,
            },
            {
              icon: Plus,
            },
            {
              icon: Settings,
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            Tags
          </Typography>
        </NeetoUIMenuBar.SubTitle>
        {tagBlocks.map(({ label, count }) => (
          <NeetoUIMenuBar.Block count={count} key={uuid()} label={label} />
        ))}
      </NeetoUIMenuBar>
    </div>
  );
};

export default MenuBar;
