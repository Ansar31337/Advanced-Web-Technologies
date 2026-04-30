import React from 'react';

const DashboardHeader = ({ title, tagline }) => {
  return (
    <header className="dashboard-header">
      <h1>{title}</h1>
      <p>{tagline}</p>
      <nav className="nav-bar">
        <a href="#" className="nav-link">Home</a>
        <a href="#" className="nav-link">Students</a>
        <a href="#" className="nav-link">Settings</a>
      </nav>
    </header>
  );
};

export default DashboardHeader;
