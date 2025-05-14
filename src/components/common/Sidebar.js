import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaBriefcase, FaRunning, FaComments, FaFileAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-items">
        <NavLink to="/home" className="sidebar-item">
          <FaHome />
          <span>Home</span>
        </NavLink>
        <NavLink to="/projects" className="sidebar-item">
          <FaBriefcase />
          <span>Projects</span>
        </NavLink>
        <NavLink to="/sprints" className="sidebar-item">
          <FaRunning />
          <span>Sprints</span>
        </NavLink>
        <NavLink to="/channels" className="sidebar-item">
          <FaComments />
          <span>Channels</span>
        </NavLink>
        <NavLink to="/meetings" className="sidebar-item">
          <FaFileAlt />
          <span>Minutes of Meeting</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

