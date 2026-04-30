import React, { useContext } from 'react';
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
          <a href="#" className="nav-link">Home</a>
          <a href="#" className="nav-link">Students</a>
          <a href="#" className="nav-link">Settings</a>
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

export default DashboardHeader;
