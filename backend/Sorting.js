const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Sample data
const customers = [
  { id: 1, name: 'John Doe', location: 'New York', createdAt: new Date('2022-01-01T12:00:00') },
  { id: 2, name: 'Jane Smith', location: 'Los Angeles', createdAt: new Date('2022-01-02T09:30:00') },
  // Add more sample data
];

// Endpoint to fetch sorted data
app.get('/api/customers', (req, res) => {
  const sortColumn = req.query.sortColumn;
  const sortDirection = req.query.sortDirection || 'asc';

  let sortedCustomers = [...customers];

  if (sortColumn === 'date') {
    sortedCustomers.sort((a, b) => {
      return sortDirection === 'asc' ? a.createdAt - b.createdAt : b.createdAt - a.createdAt;
    });
  } else if (sortColumn === 'time') {
    sortedCustomers.sort((a, b) => {
      const timeDifference = a.createdAt.getTime() - b.createdAt.getTime();
      return sortDirection === 'asc' ? timeDifference : -timeDifference;
    });
  }

  res.json(sortedCustomers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
