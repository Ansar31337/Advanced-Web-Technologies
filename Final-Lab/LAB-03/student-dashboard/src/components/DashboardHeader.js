import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext } from '../context/ThemeContext';
import { StudentContext } from '../context/StudentContext';

const DashboardHeader = ({ title, tagline }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { students } = useContext(StudentContext);
  
  const favoriteCount = students.filter(s => s.isFavorite).length;

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
      <div className="header-right">
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </button>
        <div className="favorites-counter">
          Favorites: {favoriteCount}
        </div>
      </div>
    </header>
  );
};

DashboardHeader.propTypes = {
  title: PropTypes.string.isRequired,
  tagline: PropTypes.string.isRequired,
};

export default DashboardHeader;
