import React, { useContext } from 'react';
import { StudentContext } from '../context/StudentContext';

const SearchBar = () => {
  const { searchQuery, setSearchQuery } = useContext(StudentContext);
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by name or major..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
};

export default SearchBar;
