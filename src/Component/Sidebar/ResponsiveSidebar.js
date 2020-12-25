import React from 'react';
import Sidebar from './Sidebar';
import './style.scss';

const responsiveSidebar = ({ hide, click }) => (
  <div className={hide ? 'responsive-sidebar' : 'responsive-sidebar display'} onClick={click}>
    <Sidebar />
  </div>
);

export default responsiveSidebar;
