import React from 'react';
import Sidebar from './Sidebar';
import './style.scss';

const responsiveSidebar = ({ show, click }) => (
  <div className={!show ? 'responsive-sidebar' : 'responsive-sidebar display'} onClick={click}>
    <Sidebar />
  </div>
);

export default responsiveSidebar;
