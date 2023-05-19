import React, { useContext } from "react";
import { navContext } from "../context/Context";

import { Sidenav, Nav } from 'rsuite';
import DashboardIcon from '@rsuite/icons/legacy/Dashboard'; 
import FolderIcon from '@rsuite/icons/legacy/Folder'; 
import PlannerIcon from '@rsuite/icons/legacy/Info';
import ProfileIcon from '@rsuite/icons/legacy/User';
import SettingsIcon from '@rsuite/icons/legacy/Gear2';

const Navbar = () => {
  const [expanded, setExpanded] = React.useState(false);
  const context = useContext(navContext);

  const items = [
    {
      name: "Dashboard",
      icon: <DashboardIcon/>
    },
    {
      name: "Upload",
      icon: <FolderIcon/>
    },
    {
      name: "Planner",
      icon: <PlannerIcon/>
    },
    {
      name: "profile",
      icon: <ProfileIcon/>
    },
    {
      name: "Settings",
      icon: <SettingsIcon/>
    },
    
  ]

  return <div className="sidenavContainer">
  <Sidenav expanded={expanded}>
    <Sidenav.Body >
      <Nav  activeKey={context.currentTab} onSelect={context.setTab}>
        
        {items.map((item,idx) => (
          <Nav.Item key={idx} style={{borderRadius:"5px"}} eventKey={`${idx+1}`} icon={item.icon}>
          {item.name}
          </Nav.Item>
        ))}
        
      </Nav>
    </Sidenav.Body>
    <Sidenav.Toggle onToggle={expanded => setExpanded(expanded)} />
  </Sidenav>
</div>;
};

export default Navbar;