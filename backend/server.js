const express = require('express');
const pg = require('pg');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

const pool = new pg.Pool({
  connectionString: 'postgresql://postgres:Ashu@123@localhost:5432/customers',
});

app.get('/api/customers', async (req, res) => {
  try {
    const { query } = req.query;
    let queryText = 'SELECT * FROM customers';

    if (query) {
      queryText += ` WHERE customer_name ILIKE '%${query}%' OR location ILIKE '%${query}%'`;
    }

    const result = await pool.query(queryText);
    res.json(result.rows);
  } catch (error) {
    console.error('Error executing query', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});





