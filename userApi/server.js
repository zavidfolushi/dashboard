const express = require('express');
const app = express();
const port = 3001;

const customers = require('./customers.json');
const orders = require('./orders.json');

app.get('/api/customers', (req, res) => res.json(customers));

app.get('/api/customers/:email', (req, res) => {
  const email = req.params.email;
  const customer = customers.find(c => c.email === email);

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
