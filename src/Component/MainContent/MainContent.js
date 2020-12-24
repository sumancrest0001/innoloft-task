import React from 'react';
import UserInformation from './UserInformation';
import MainInformation from './MainInformation';
import './style.scss';

const mainContent = () => (
  <div>
    <div>
      Main content section
    </div>
    <UserInformation />
    <MainInformation />
  </div>
);

export default mainContent;
