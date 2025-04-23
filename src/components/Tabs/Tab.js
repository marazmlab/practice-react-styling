import React from "react";
import { StyledTab } from './Tabs.styled';

const Tab = ({ title, active, onClick, disabled }) => {
  return (
    <StyledTab active={active} onClick={onClick} disabled={disabled}>
      {title}
    </StyledTab>
  );
};

Tab.displayName = 'Tab';

export default Tab;