const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

const coutroomsController = require('./server/controllers/courtrooms');
const judgesController = require('./server/controllers/judges');
const participantsController = require('./server/controllers/participants');
const casesController = require('./server/controllers/cases');

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api', (req, res) => res.status(200).send({
  message: 'Welcome to the Todos API!',
}));


// Courtroom CRUD
app.post('/courtroom', coutroomsController.create);
app.get('/courtrooms', coutroomsController.list);
app.get('/courtroom', coutroomsController.find);
app.patch('/courtroom', coutroomsController.update);
app.delete('/courtroom', judgesController.delete);

// Judge CRUD
app.post('/judge', judgesController.create);
app.get('/judges', judgesController.list);
app.get('/judge', judgesController.find);
app.patch('/judge', judgesController.update);
app.delete('/judge', judgesController.delete);

// Participants CRUD
app.post('/participant', participantsController.create);
app.get('/participants', participantsController.list);
app.get('/participant', participantsController.find);
app.patch('/participant', participantsController.update);
app.delete('/participant', participantsController.delete);

// Case CRUD
app.post('/case', casesController.create);
app.get('/cases', casesController.list);
app.get('/case', casesController.find);
app.patch('/case', casesController.update);
app.delete('/case', casesController.delete);

module.exports = app;
