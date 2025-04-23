import React, { useState } from "react";
import { StyledTabs, StyledTabList } from './Tabs.styled';

const Tabs = ({ children, defaultActivekey = 'home' }) => {
  const [activeKey, setActiveKey] = useState(defaultActivekey);

  const handleTabClick = (key, disabled) => {
    if (!disabled) {
      setActiveKey(key);
    }
  };

  return (
    <StyledTabs>
      <StyledTabList>
        {React.Children.map(children, (child) => {
          if (child.type.displayName === 'Tab') {
            return React.cloneElement(child, {
              active: child.props.eventKey === activeKey,
              onClick: () => handleTabClick(child.props.eventKey, child.props.disabled),
              disabled: child.props.disabled,
            });
          }
          return null;
        })}
      </StyledTabList>
      {React.Children.map(children, (child) => {
          if (child.type.displayName === 'Tab' && child.props.eventKey === activeKey) {
            return child.props.children;
          }
          return null;
        })}
    </StyledTabs>
  );
};

export default Tabs;