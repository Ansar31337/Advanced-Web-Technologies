import React from 'react';
import PropTypes from 'prop-types';

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

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
  favoriteCount: PropTypes.number.isRequired,
};

export default DashboardHeader;
