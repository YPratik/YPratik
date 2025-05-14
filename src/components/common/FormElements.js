import React from 'react';
import './FormElements.css';

export const Input = ({ type = 'text', placeholder, value, onChange, label }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input 
        type={type} 
        className="form-control" 
        placeholder={placeholder} 
        value={value} 
        onChange={onChange} 
      />
    </div>
  );
};

export const Select = ({ options, value, onChange, label, placeholder }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <div className="select-dropdown">
        <select className="form-control" value={value} onChange={onChange}>
          <option value="" disabled selected>
            {placeholder || 'Select an option'}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export const Textarea = ({ placeholder, value, onChange, label, rows = 4 }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea
        className="form-control textarea"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={rows}
      />
    </div>
  );
};

export const Checkbox = ({ label, checked, onChange }) => {
  return (
    <div className="checkbox-group">
      <input 
        type="checkbox" 
        checked={checked} 
        onChange={onChange} 
        id={`checkbox-${label}`} 
      />
      <label htmlFor={`checkbox-${label}`}>{label}</label>
    </div>
  );
};

export const ToggleSwitch = ({ isOn, handleToggle, onLabel, offLabel }) => {
  return (
    <div className="toggle-container">
      <span className={`toggle-label ${isOn ? '' : 'active-label'}`}>{offLabel}</span>
      <div className="toggle-switch">
        <input
          checked={isOn}
          onChange={handleToggle}
          className="toggle-switch-checkbox"
          id="toggle-switch"
          type="checkbox"
        />
        <label className="toggle-switch-label" htmlFor="toggle-switch">
          <span className="toggle-switch-inner"></span>
          <span className="toggle-switch-switch"></span>
        </label>
      </div>
      <span className={`toggle-label ${isOn ? 'active-label' : ''}`}>{onLabel}</span>
    </div>
  );
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  type = 'button', 
  onClick, 
  icon 
}) => {
  return (
    <button 
      type={type} 
      className={`btn btn-${variant}`} 
      onClick={onClick}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
};
