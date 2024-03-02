import React from 'react';

const SortingIcons = ({ column, sortColumn, sortDirection }) => {
  return (
    <span className="sort-icons">
      {sortColumn === column && (
        sortDirection === 'asc' ? <>&#x25B2;</> : <>&#x25BC;</>
      )}
    </span>
  );
};

export default SortingIcons;
