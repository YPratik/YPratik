import React from 'react';
import { Select, Button } from '../common/FormElements';
import { FaPlus } from 'react-icons/fa';
import './ParticipantSelector.css';

const ParticipantSelector = ({ isInternal, participants, onAddParticipant, onRemoveParticipant }) => {
  return (
    <div className="participant-selector">
      <div className="participant-row">
        <div className="participant-col">
          <Select
            label={isInternal ? "Internal User" : "External User"}
            placeholder={`Select ${isInternal ? 'internal' : 'external'} user`}
            options={[]}
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="participant-col participant-actions">
          <Button variant="outline" onClick={onAddParticipant} icon={<FaPlus />}>
            Add More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParticipantSelector;