import React from "react";
import { StyledBreadcrumbItem, StyledBreadcrumbLink } from './Breadcrumb.styled'; 

const BreadcrumbItem = ({ href, active, children }) => {
  if (active) {
    return  <StyledBreadcrumbItem active >{children}</StyledBreadcrumbItem>;
  }
  return (
    <StyledBreadcrumbItem>
      <StyledBreadcrumbLink href={href}>{children}</StyledBreadcrumbLink>
    </StyledBreadcrumbItem>
  );
};

export default BreadcrumbItem;