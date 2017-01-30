let express = require('express');
let massive = require('massive');

let app = express();
let db = massive.connectSync({db : "pgguide"});

app.listen(3000, function () {
    console.log('listening on port 3000');
});

app.get('/', function (req, res) {
    res.send('HelloWorld');
});

app.get('/users', function (req, res) {
    db.users.find({}, function (err, results) {
        console.log(results);
        res.send(results)
    });
});

app.get('/users/:id', function (req, res) {
	let user_id = {
		id: req.params.id
	}

    db.users.find(user_id, function (err, result) {
		res.send(result);
	})
});

app.get('/products', function (req, res) {
    db.products.find({}, function (err, results) {
        console.log(results);
        res.send(results)
    });
});

app.get('/products/:id', function (req, res) {
	let product_id = {
		id: req.params.id
	}

    db.products.find(product_id, function (err, result) {
		res.send(result);
	})
});

app.get('/purchases', function (req, res) {
    db.purchases.find({}, function (err, results) {
        console.log(results);
        res.send(results)
    });
});

app.get('/purchases/:id', function (req, res) {
	let purchase_id = {
		id: req.params.id
	}

    db.purchases.find(purchase_id, function (err, result) {
		res.send(result);
	})
});