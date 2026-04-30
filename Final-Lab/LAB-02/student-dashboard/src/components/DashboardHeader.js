import React from 'react';

const DashboardHeader = ({ title, tagline, favoriteCount }) => {
  return (
    <header className="dashboard-header">
      <div className="header-info">
        <h1>{title}</h1>
        <p>{tagline}</p>
        <nav className="nav-bar">
          <button className="nav-link-btn" onClick={(e) => e.preventDefault()}>Home</button>
          <button className="nav-link-btn" onClick={(e) => e.preventDefault()}>Students</button>
          <button className="nav-link-btn" onClick={(e) => e.preventDefault()}>Settings</button>
        </nav>
      </div>
      <div className="favorites-counter">
        Favorites: {favoriteCount}
      </div>
    </header>
  );
};

export default DashboardHeader;
