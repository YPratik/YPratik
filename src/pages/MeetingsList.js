import React from 'react';
import TopNavbar from '../components/common/TopNavbar';
import Sidebar from '../components/common/Sidebar';
import MeetingList from '../components/common/meeting/MeetingList';

import './MeetingsList.css';

const MeetingsList = () => {
  return (
    <div className="app-container">
      <TopNavbar />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <MeetingList />
        </div>
      </div>
    </div>
  );
};

export default MeetingsList;