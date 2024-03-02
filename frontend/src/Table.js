import React from 'react';

const Table = ({ data, handleSort }) => {
  return (
    <table>
      <thead>
        <tr>
        <th onClick={() => handleSort('name')}>Name</th>
         <th onClick={() => handleSort('location')}>Location</th>
          <th>Email</th>
          <th>Age</th>
          <th>Phone</th>
          <th>Date</th>
          <th>Time</th>
          
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.location}</td>
            <td>{item.email}</td>
            <td>{item.age}</td>
            <td>{item.phone}</td>
            <td>{new Date(item.created_at).toLocaleDateString()}</td>
            <td>{new Date(item.created_at).toLocaleTimeString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
