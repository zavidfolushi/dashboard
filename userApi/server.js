const express = require('express');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(cors());

const customers = require('./customers.json');
const orders = require('./orders.json');

const getUniqueValues = (array, key) => {
  const unique = new Set(array.map(item => item[key]));
  return Array.from(unique);
};

app.get('/api/customers', (req, res) => {
  const { limit, search, gender, country } = req.query;
  let results = customers;

  if (search) {
    const searchTerms = search.toLowerCase().split(/\s+/);
    results = results.filter(customer => 
      searchTerms.every(term =>
        customer.firstName.toLowerCase().includes(term) || 
        customer.lastName.toLowerCase().includes(term)
      )
    );
  }

  if (gender) {
    results = results.filter(customer => customer.gender.toLowerCase() === gender.toLowerCase());
  }

  if (country) {
    results = results.filter(customer => customer.country.toLowerCase() === country.toLowerCase());
  }

  if (limit) {
    const limitNum = parseInt(limit, 10);
    if (!isNaN(limitNum)) {
      results = results.slice(0, limitNum);
    }
  }

  res.json(results);
});

app.get('/api/customers/genders', (req, res) => {
  const uniqueGenders = getUniqueValues(customers, 'gender');
  res.json(uniqueGenders);
});

app.get('/api/customers/countries', (req, res) => {
  const uniqueCountries = getUniqueValues(customers, 'country');
  res.json(uniqueCountries);
});

app.get('/api/customers/:fullName', (req, res) => {
  const fullName = req.params.fullName.toLowerCase();
  
  const customer = customers.find(c => 
    (c.firstName.toLowerCase() + c.lastName.toLowerCase()) === fullName
  );

  if (customer) {
    res.json(customer);
  } else {
    res.status(404).send('Customer not found');
  }
});

app.get('/api/orders', (req, res) => res.json(orders));

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
