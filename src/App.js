import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MeetingsList from './pages/MeetingsList';
import NewMeeting from './pages/NewMeeting';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/meetings" replace />} />
        <Route path="/meetings" element={<MeetingsList />} />
        <Route path="/meetings/new" element={<NewMeeting />} />
        <Route path="/home" element={<MeetingsList />} />
        <Route path="/dashboard" element={<MeetingsList />} />
        <Route path="/setup" element={<MeetingsList />} />
        <Route path="/projects" element={<MeetingsList />} />
        <Route path="/sprints" element={<MeetingsList />} />
        <Route path="/channels" element={<MeetingsList />} />
      </Routes>
    </Router>
  );
}

export default App;
