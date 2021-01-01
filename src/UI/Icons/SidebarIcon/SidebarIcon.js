import React from 'react';
import { IconContext } from 'react-icons';
import './SidebarIcon.scss';

const SidebarIcon = ({ children, text }) => (
  <IconContext.Provider value={{ style: { fontSize: '20px', color: '#000000' } }}>
    <div className="sidebar-icon">
      {children}
      <span className="text">{text}</span>
    </div>
  </IconContext.Provider>
);

export default SidebarIcon;
