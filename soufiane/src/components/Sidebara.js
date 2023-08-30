import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaBars, FaHome, FaUser, FaCog } from 'react-icons/fa';

function Sidebara() {
  return (
    <ProSidebar>
      <Menu iconShape="square">
        <MenuItem icon={<FaBars />}>Dashboard</MenuItem>
        <SubMenu title="Profile" icon={<FaUser />}>
          <MenuItem>Profile Overview</MenuItem>
          <MenuItem>Account Settings</MenuItem>
        </SubMenu>
        <SubMenu title="Settings" icon={<FaCog />}>
          <MenuItem>General</MenuItem>
          <MenuItem>Security</MenuItem>
        </SubMenu>
      </Menu>
    </ProSidebar>
  );
}

export default Sidebara;


