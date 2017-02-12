const express = require('express');
const massive = require('massive');

const app = express();
const db = massive.connectSync({
  db: 'pgguide',
});

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get('/', (req, res) => {
  res.send('HelloWorld');
});

app.get('/users', (req, res) => {
  db.users.find({}, (err, results) => {
    console.log(results);
    res.send(results);
  });
});

app.get('/users/:id', (req, res) => {
  const userId = {
    id: req.params.id,
  };

  db.users.find(userId, (err, result) => {
    res.send(result);
  });
});

app.get('/products', (req, res) => {
  db.products.find({}, (err, results) => {
    console.log(results);
    res.send(results);
  });
});

app.get('/products/:id', (req, res) => {
  const productId = {
    id: req.params.id,
  };

  db.products.find(productId, (err, result) => {
    res.send(result);
  });
});

app.get('/purchases', (req, res) => {
  db.purchases.find({}, (err, results) => {
    console.log(results);
    res.send(results);
  });
});

app.get('/purchases/:id', (req, res) => {
  const purchaseId = {
    id: req.params.id,
  };

  db.purchases.find(purchaseId, (err, result) => {
    res.send(result);
  });
});
