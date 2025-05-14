import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaPlus } from 'react-icons/fa';

import {
  Select,
  ToggleSwitch,
  Button,
} from '../FormElements';

import MeetingPoint from './MeetingPoint';
import './MeetingForm.css';

const MeetingForm = () => {
  const navigate = useNavigate();
  const [isInternal, setIsInternal] = useState(true);
  const [meetingPoints, setMeetingPoints] = useState([1]);
  
  // Meeting details form state
  const [meetingForm, setMeetingForm] = useState({
    title: '',
    date: '',
    time: '',
    type: '',
    mode: '',
    internalUser: '',
    points: [{ description: '', raisedBy: '', status: '', convertToTask: false }]
  });

  const handleToggleChange = () => {
    setIsInternal(!isInternal);
  };

  const handleAddPoint = () => {
    const newPoints = [...meetingForm.points, { description: '', raisedBy: '', status: '', convertToTask: false }];
    setMeetingForm({ ...meetingForm, points: newPoints });
    setMeetingPoints([...meetingPoints, meetingPoints.length + 1]);
  };

  const handlePointChange = (index, field, value) => {
    const updatedPoints = [...meetingForm.points];
    updatedPoints[index] = { ...updatedPoints[index], [field]: value };
    setMeetingForm({ ...meetingForm, points: updatedPoints });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', meetingForm);
    // Redirect back to meetings list
    navigate('/meetings');
  };

  return (
    <div className="meeting-form-container">
      <h2>New Minutes Of Meeting</h2>
      
      <form onSubmit={handleFormSubmit}>
        <div className="form-row">
          <div className="form-col">
            <Select
              label="Meeting Title"
              placeholder="Enter meeting title"
              options={[]}
              value={meetingForm.title}
              onChange={(e) => setMeetingForm({ ...meetingForm, title: e.target.value })}
            />
          </div>
          
          <div className="form-col">
            <Select
              label="Meeting Date"
              placeholder="Select meeting date"
              options={[]}
              value={meetingForm.date}
              onChange={(e) => setMeetingForm({ ...meetingForm, date: e.target.value })}
            />
          </div>
          
          <div className="form-col">
            <Select
              label="Meeting Time"
              placeholder="Select meeting time"
              options={[]}
              value={meetingForm.time}
              onChange={(e) => setMeetingForm({ ...meetingForm, time: e.target.value })}
            />
          </div>
        </div>
        
        <div className="form-row">
          <div className="form-col">
            <Select
              label="Meeting Type"
              placeholder="Select meeting type"
              options={[]}
              value={meetingForm.type}
              onChange={(e) => setMeetingForm({ ...meetingForm, type: e.target.value })}
            />
          </div>
          
          <div className="form-col">
            <Select
              label="Meeting Mode"
              placeholder="Select meeting mode"
              options={[{ value: 'in-person', label: 'In Person' }, { value: 'virtual', label: 'Virtual' }]}
              value={meetingForm.mode}
              onChange={(e) => setMeetingForm({ ...meetingForm, mode: e.target.value })}
            />
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="toggle-section">
          <ToggleSwitch 
            isOn={isInternal} 
            handleToggle={handleToggleChange} 
            onLabel="External" 
            offLabel="Internal" 
          />
        </div>
        
        <div className="form-row">
          <div className="form-col">
            <Select
              label="Internal User"
              placeholder="Select internal user"
              options={[]}
              value={meetingForm.internalUser}
              onChange={(e) => setMeetingForm({ ...meetingForm, internalUser: e.target.value })}
            />
          </div>
          
          <div className="form-col">
            <div className="add-more-btn-container">
              <Button variant="outline" onClick={() => console.log('Add more clicked')} icon={<FaPlus />}>
                Add More
              </Button>
            </div>
          </div>
        </div>
        
        <div className="section-divider"></div>
        
        {meetingPoints.map((pointNum, index) => (
          <MeetingPoint 
            key={index}
            pointNumber={pointNum}
            onChange={(field, value) => handlePointChange(index, field, value)}
            data={meetingForm.points[index]}
          />
        ))}
        
        <div className="add-point-container">
          <Button variant="outline" onClick={handleAddPoint} icon={<FaPlus />}>
            Add New Point
          </Button>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="documents-section">
          <p className="no-docs">No Documents Attached</p>
          <p className="doc-instructions">Drop or attach relevant documents here</p>
          
          <button className="btn btn-outline attach-btn">
            Attach Files
          </button>
        </div>
        
        <div className="section-divider"></div>
        
        <div className="form-actions">
          <Button type="submit" variant="primary">
            Create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default MeetingForm;