import React from 'react';
import PropTypes from 'prop-types';

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="text"
      className="search-bar"
      placeholder="Search by name or major..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchBar;
