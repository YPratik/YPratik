import React from 'react';
import { Textarea, Select, Checkbox } from '../FormElements';
import './MeetingPoint.css';

const MeetingPoint = ({ pointNumber, onChange, data }) => {
  return (
    <div className="meeting-point">
      <h3>Point {pointNumber}</h3>
      
      <div className="meeting-point-content">
        <div className="meeting-point-col">
          <Textarea
            placeholder="Enter description here..."
            value={data.description}
            onChange={(e) => onChange('description', e.target.value)}
          />
          
          <div className="task-checkbox">
            <Checkbox
              label="Convert to task"
              checked={data.convertToTask}
              onChange={(e) => onChange('convertToTask', e.target.checked)}
            />
          </div>
        </div>
        
        <div className="meeting-point-col">
          <Select
            label="Raised By"
            placeholder="Select user"
            options={[]}
            value={data.raisedBy}
            onChange={(e) => onChange('raisedBy', e.target.value)}
          />
          
          <Select
            label="Status"
            placeholder="Select status"
            options={[
              { value: 'pending', label: 'Pending' },
              { value: 'completed', label: 'Completed' },
              { value: 'in-progress', label: 'In Progress' }
            ]}
            value={data.status}
            onChange={(e) => onChange('status', e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MeetingPoint;