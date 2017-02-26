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

// SQL INJECTABLE
app.get('/products/injectable/:title?', (req, res) => {
  const productTitle = req.query.title;

  const query = `select * from products where title = '${productTitle}'`;
  console.log(query);

  db.run(query, (err, result) => {
    res.send(result);
  });
});

// Parameterised query
app.get('/products/pq:title?', (req, res) => {
  const productTitle = req.query.title;
  db.run('select * from products where title = $1', [productTitle], (err, result) => {
    res.send(result);
  });
});

// Stored procedure
app.get('/products/sp:id?', (req, res) => {
  const id = req.query.id;
  console.log(id);
  db.run('select GET_PRODUCT_BY_ID($1)', [id], (err, result) => {
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
