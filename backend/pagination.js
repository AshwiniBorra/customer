const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Sample data
const customers = [
  { id: 1, name: 'John Doe', location: 'New York' },
  { id: 2, name: 'Jane Smith', location: 'Los Angeles' },
  // Add more sample data
];

// Endpoint to fetch paginated data
app.get('/api/customers', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 20;
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const paginatedCustomers = customers.slice(startIndex, endIndex);

  res.json(paginatedCustomers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
