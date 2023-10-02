import {
  CBadge,
  CNavGroup,
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
} from '@coreui/react';
import React from 'react';

const SideBar = () => {
  return (
    <CSidebar>
      <CSidebarBrand>Sidebar Brand</CSidebarBrand>
      <CSidebarNav>
        <CNavTitle>Nav Title</CNavTitle>
        <CNavItem href="#"></CNavItem>
        <CNavItem href="#">
          <CBadge color="primary ms-auto">NEW</CBadge>
        </CNavItem>
        <CNavGroup toggler="Nav dropdown">
          <CNavItem href="#"></CNavItem>
          <CNavItem href="#"></CNavItem>
        </CNavGroup>
      </CSidebarNav>
      <CSidebarToggler />
    </CSidebar>
  );
};

export default SideBar;
