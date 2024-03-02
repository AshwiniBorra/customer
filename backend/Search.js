const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Sample data
const customers = [
  { id: 1, name: 'John Doe', location: 'New York' },
  { id: 2, name: 'Jane Smith', location: 'Los Angeles' },
  // Add more sample data
];

// Endpoint to search data by name or location
app.get('/api/customers', (req, res) => {
  const searchText = req.query.searchText ? req.query.searchText.toLowerCase() : '';

  const filteredCustomers = customers.filter(customer =>
    customer.name.toLowerCase().includes(searchText) || customer.location.toLowerCase().includes(searchText)
  );

  res.json(filteredCustomers);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
