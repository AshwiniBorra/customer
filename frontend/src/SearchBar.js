import React from 'react';

const SearchBar = ({ searchText, setSearchText, onSearch }) => {
  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchText}
        onChange={handleChange}
        placeholder="Search by name or location..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
