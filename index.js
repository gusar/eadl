let express = require('express');
let massive = require('massive');

let app = express();
let db = massive.connectSync({db : "pgguide"});

app.listen(3000, function() {
    console.log('listening on port 3000');
});

app.get('/', function(req, res) {
    res.send('HelloWorld');
});

app.get('/users', function(req, res) {
    db.run('select * from users', function(err, results) {
        console.log(results);
        res.send(results)
    });
});

app.get('/users', function(req, res) {
    db.run('select * from users', function(err, results) {
        console.log(results);
        res.send(results)
    });
});