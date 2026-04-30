import React from 'react';

const SortControls = ({ sortType, setSortType }) => {
  return (
    <div className="sort-controls">
      <button 
        className={`sort-btn ${sortType === 'default' ? 'active' : ''}`}
        onClick={() => setSortType('default')}
      >
        Default
      </button>
      <button 
        className={`sort-btn ${sortType === 'name' ? 'active' : ''}`}
        onClick={() => setSortType('name')}
      >
        Name (A-Z)
      </button>
      <button 
        className={`sort-btn ${sortType === 'gpa' ? 'active' : ''}`}
        onClick={() => setSortType('gpa')}
      >
        GPA (High-Low)
      </button>
    </div>
  );
};

export default SortControls;
