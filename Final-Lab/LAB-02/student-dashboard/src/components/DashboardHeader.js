import React from 'react';

const DashboardHeader = ({ title, tagline, favoriteCount }) => {
  return (
    <header className="dashboard-header">
      <div className="header-info">
        <h1>{title}</h1>
        <p>{tagline}</p>
        <nav className="nav-bar">
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Students</a>
          <a href="#" className="nav-link">Settings</a>
        </nav>
      </div>
      <div className="favorites-counter">
        Favorites: {favoriteCount}
      </div>
    </header>
  );
};

export default DashboardHeader;
