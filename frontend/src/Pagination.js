import React from 'react';

const Pagination = ({ currentPage, pageSize, totalRecords, onPageChange }) => {
  const totalPages = Math.ceil(totalRecords / pageSize);

  const handleClick = (page) => {
    onPageChange(page);
  };

  const renderPaginationButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <button key={i} onClick={() => handleClick(i)} className={currentPage === i ? 'active' : ''}>
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="pagination">
      {renderPaginationButtons()}
    </div>
  );
};

export default Pagination;
