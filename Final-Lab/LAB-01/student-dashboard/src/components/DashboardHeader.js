import React from 'react';

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

export default DashboardHeader;
