// CustomerList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from './Table';
import Pagination from './Pagination';
import SearchBar from './SearchBar';

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20;

  useEffect(() => {
    fetchData();
  }, [currentPage, sortColumn, sortDirection]);

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

  return (
    <div>
      <h1>Customer List</h1>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <Table customers={customers} handleSort={handleSort} />
      <Pagination currentPage={currentPage} pageSize={pageSize} setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default CustomerList;


