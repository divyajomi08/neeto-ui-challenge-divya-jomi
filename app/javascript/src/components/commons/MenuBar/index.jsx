import React, { useState } from "react";

import { Typography } from "neetoui";
import { MenuBar as NeetoUIMenuBar } from "neetoui/layouts";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import { v4 as uuid } from "uuid";

import { TAG_ICONS } from "./constants";

const { Block, SubTitle, Search } = NeetoUIMenuBar;

const MenuBar = ({
  showMenu = false,
  title,
  mainBlocks = [],
  segmentBlocks = [],
  tagBlocks = [],
}) => {
  const [isSearchCollapsed, setIsSearchCollapsed] = useState(true);

  const { t } = useTranslation();

  return (
    <div className="flex">
      <NeetoUIMenuBar showMenu={showMenu} title={title}>
        {mainBlocks.map(({ label, isActive, count }) => (
          <Block active={isActive} count={count} key={uuid()} label={label} />
        ))}
        <SubTitle
          iconProps={[
            {
              icon: Search,
              onClick: () =>
                setIsSearchCollapsed(isSearchCollapsed => !isSearchCollapsed),
            },
          ]}
        >
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            {t("common.segments")}
          </Typography>
        </SubTitle>
        <Search
          collapse={isSearchCollapsed}
          onCollapse={() => setIsSearchCollapsed(true)}
        />
        {segmentBlocks.map(({ label, count }) => (
          <Block count={count} key={uuid()} label={label} />
        ))}
        <SubTitle iconProps={TAG_ICONS}>
          <Typography
            component="h4"
            style="h5"
            textTransform="uppercase"
            weight="bold"
          >
            {t("common.tags")}
          </Typography>
        </SubTitle>
        {tagBlocks.map(({ label, count }) => (
          <Block count={count} key={uuid()} label={label} />
        ))}
      </NeetoUIMenuBar>
    </div>
  );
};

MenuBar.propTypes = {
  showMenu: PropTypes.bool,
  title: PropTypes.string,
  mainBlocks: PropTypes.array,
  segmentBlocks: PropTypes.array,
  tagBlocks: PropTypes.array,
};

export default MenuBar;
