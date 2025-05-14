import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';
import './MeetingList.css';

const MeetingList = () => {
  const navigate = useNavigate();
  
  // Sample data matching the screenshot
  const meetings = [
    {
      id: 'PR-001',
      title: 'Project 1',
      date: 'Active',
      organizer: 'Sohail Ansari',
      mode: 'In Person',
      participants: 6,
      agendaItems: 10,
      actionItems: 5
    }
  ];

  const handleNewMeeting = () => {
    navigate('/meetings/new');
  };

  return (
    <div className="meeting-list">
      <div className="meeting-list-header">
        <h2>Minutes Of Meeting</h2>
        <button className="btn btn-primary new-mom-btn" onClick={handleNewMeeting}>
          <FaPlus /> New MoM
        </button>
      </div>
      <div className="meeting-table-container">
        <table className="meeting-table">
          <thead>
            <tr>
              <th>MoM id</th>
              <th>Minutes Title</th>
              <th>Date Of Meeting</th>
              <th>Organizer</th>
              <th>Meeting Mode</th>
              <th>Participants</th>
              <th>Agenda Items</th>
              <th>Action Items</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map(meeting => (
              <tr key={meeting.id}>
                <td>{meeting.id}</td>
                <td>{meeting.title}</td>
                <td>
                  <div className="active-status">
                    {meeting.date}
                    <span className="arrow-down">▼</span>
                  </div>
                </td>
                <td>{meeting.organizer}</td>
                <td>{meeting.mode}</td>
                <td>{meeting.participants}</td>
                <td>{meeting.agendaItems}</td>
                <td>{meeting.actionItems}</td>
              </tr>
            ))}
            {Array(9).fill(0).map((_, index) => (
              <tr key={`empty-${index}`}>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
                <td>&nbsp;</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MeetingList;