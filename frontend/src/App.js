import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import Table from './Table';
import SortingIcons from './SortingIcons';

const App = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetchData();
  }, [currentPage, sortColumn, sortDirection]); // Added fetchData to the dependency array

  const fetchData = async () => {
    try {
      const response = await axios.get(`/api/customers?page=${currentPage}&sortColumn=${sortColumn}&sortDirection=${sortDirection}&searchText=${searchText}`);
      setCustomers(response.data);
    } catch (error) {
      console.error('Error fetching customers:', error);
    }
  };

  const handleSort = (column) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };
  useEffect(() => {
    fetchData();
  }, [fetchData, currentPage, sortColumn, sortDirection]);
  

  return (
    <div>
      <h1>Customer List</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} onSearch={fetchData} />
      <Table data={customers} handleSort={handleSort} />
      <Pagination currentPage={currentPage} pageSize={pageSize} totalRecords={customers.length} onPageChange={setCurrentPage} />
      <SortingIcons column="date" sortColumn={sortColumn} sortDirection={sortDirection} />
      <SortingIcons column="time" sortColumn={sortColumn} sortDirection={sortDirection} />
    </div>
  );
};

export default App;





