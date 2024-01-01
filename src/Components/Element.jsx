import React from 'react';
import "../Styles/element.css";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Element = ({ title, icon, isSelected, onClick }) => {
  return (
    <div
      className={`element ${isSelected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <div className="content">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <span><ChevronRightIcon/></span>
    </div>
  );
}

export default Element;