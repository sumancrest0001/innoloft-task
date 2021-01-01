import React from 'react';
import { FaChevronUp, FaRegBell } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import Icons from '../../UI/Icons/Icons';
import logo from '../../images/logo_innoloft.png';
import profile from '../../images/user-image.webp';
import './Header.scss';

const header = ({ toggleShowStatus }) => (
  <div className="header">
    <div className="header__hamburger-menu" onClick={toggleShowStatus}>
      <Icons size="1.5rem"><GiHamburgerMenu /></Icons>
    </div>
    <img src={logo} alt="innoloft logo" className="logo-image" />
    <ul className="header__icons">
      <li className="header__languages">
        <span>EN</span>
        <Icons size="20px"><FaChevronUp /></Icons>
      </li>
      <li className="header__icon"><Icons size="25px"><FaRegBell /></Icons></li>
      <li className="header__icon">
        <div className="header__profile-image" style={{ backgroundImage: `url(${profile})` }} />
      </li>
    </ul>
  </div >
);

export default header;
