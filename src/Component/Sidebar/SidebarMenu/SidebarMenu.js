import React from 'react';
import { BiRocket, BiCircle, BiCalendarEvent } from 'react-icons/bi';
import { FaRegNewspaper } from 'react-icons/fa';
import { FiTool } from 'react-icons/fi';
import { RiHomeLine, RiLuggageCartFill, RiBuildingLine } from 'react-icons/ri';
import { MdGroup } from 'react-icons/md';
import { VscCircleSlash } from 'react-icons/vsc';
import SidebarIcon from '../../../UI/Icons/SidebarIcon/SidebarIcon';
import '../style.scss';

const sidebar = () => (
  <div className="sidebar-menu">
    <SidebarIcon text="home">
      <RiHomeLine />
    </SidebarIcon>
    <SidebarIcon text="members">
      <MdGroup />
    </SidebarIcon>
    <SidebarIcon text="marketplace">
      <RiLuggageCartFill />
    </SidebarIcon>
    <SidebarIcon text="matching">
      <VscCircleSlash />
    </SidebarIcon>
    <SidebarIcon text="News">
      <FaRegNewspaper />
    </SidebarIcon>
    <SidebarIcon text="startups">
      <BiRocket />
    </SidebarIcon>
    <SidebarIcon text="companies">
      <RiBuildingLine />
    </SidebarIcon>
    <SidebarIcon text="ecosystem">
      <BiCircle />
    </SidebarIcon>
    <SidebarIcon text="events">
      <BiCalendarEvent />
    </SidebarIcon>
    <SidebarIcon text="tools">
      <FiTool />
    </SidebarIcon>
  </div>
);

export default sidebar;
