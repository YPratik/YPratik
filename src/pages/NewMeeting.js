import React from 'react';
import TopNavbar from '../components/common/TopNavbar';
import Sidebar from '../components/common/Sidebar';
import MeetingForm from '../components/common/meeting/MeetingForm';

import './NewMeeting.css';

const NewMeeting = () => {
  return (
    <div className="app-container">
      <TopNavbar />
      <div className="content-container">
        <Sidebar />
        <div className="main-content">
          <MeetingForm />
        </div>
      </div>
    </div>
  );
};

export default NewMeeting;