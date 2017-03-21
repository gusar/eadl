const express = require('express');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');
const config = require('./config');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3030;
app.set('superSecret', config.secret); // secret variable
const sequelize = new Sequelize('auth', 'andy', '', config.sequelize);

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
});


// Model
const User = sequelize.define('User', {
  username: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.STRING,
  },
}, {
  tableName: 'users',
});

// Routes
const apiRoutes = express.Router();

app.post('/setup', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(401).send('Failed authentication');
    }
    User.sync().then(() => User.create({
      username: req.body.username,
      password: hash,
    }).then(() => {
      console.log('Test user created');
      res.send({ success: true });
    }));
    return 0;
  });
});

// Authentication
apiRoutes.post('/auth', (req, res) => {
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then((user) => {
    if (!user) {
      return res.status(401).send({ success: false, message: 'Failed authentication. User not found.' });
    } else if (user) {
      bcrypt.compare(req.body.password, user.password, (err, result) => {
        if (err) {
          return res.status(401).send('Failed authentication');
        }

        if (result) {
          const token = jwt.sign({ username: user.username }, app.get('secret'), { expiresIn: 1000 });

          return res.send({
            success: true,
            message: 'Token created',
            token,
          });
        }
        res.status(401).send({ success: false, message: 'Wrong password' });
        return 0;
      });
    }
    return 0;
  });
});

// Check for token
apiRoutes.use((req, res, next) => {
  const token = req.body.token || req.query.token || req.headers['x-access-token'];

// Read token
  if (token) {
    jwt.verify(token, app.get('secret'), (err, decoded) => {
      if (err) {
        return res.status(401).send({ success: false, message: 'Bad token.' });
      }
      req.decoded = decoded;
      next();
      return 0;
    });
  } else {
    return res.status(403).send({
      success: false,
      message: 'Token missing.',
    });
  }
  return 0;
});

// General routes
apiRoutes.get('/users', (req, res) => {
  User.findAll({}).then((result) => {
    res.status(200).send(result);
  });
});

apiRoutes.get('/user/delete', (req, res) => {
  User.sync().then(() => User.destroy({
    where: {},
  }).then((result) => {
    res.status(200).send({ result });
  }));
});

app.use('/api', apiRoutes);
