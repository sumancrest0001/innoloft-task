import React from 'react';
import SidebarMenu from './SidebarMenu/SidebarMenu';
import Footer from '../Footer/Footer';
import './style.scss';

const sidebar = () => (
  <div className="sidebar">
    <SidebarMenu />
    <Footer />
  </div>
);

export default sidebar;