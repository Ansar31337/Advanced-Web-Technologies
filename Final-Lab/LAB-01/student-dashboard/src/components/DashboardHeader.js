import React from 'react';
import PropTypes from 'prop-types';

const DashboardHeader = ({ title, tagline }) => {
  return (
    <header className="dashboard-header">
      <h1>{title}</h1>
      <p>{tagline}</p>
      <nav className="nav-bar">
        <button className="nav-link-btn" onClick={(e) => e.preventDefault()}>Home</button>
        <button className="nav-link-btn" onClick={(e) => e.preventDefault()}>Students</button>
        <button className="nav-link-btn" onClick={(e) => e.preventDefault()}>Settings</button>
      </nav>
    </header>
  );
};

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default DashboardHeader;
