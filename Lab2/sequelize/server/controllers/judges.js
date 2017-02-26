const Judge = require('../models').Judge;

module.exports = {
  create(req, res) {
    return Judge
      .create({
        name: req.query.name,
        room: req.query.room,
        ext: req.query.ext,
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Judge
      .destroy({
        where: {
          name: req.query.name,
        },
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Judge
      .findOne({
        where: {
          name: req.query.name,
        },
      })
      .then(judge => {
        if (!judge) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return judge
          .updateAttributes({
            name: req.query.new_name,
            room: req.query.new_room,
            ext: req.query.new_ext,
          })
          .then(() => res.status(200).send(judge))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Judge
      .all()
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  find(req, res) {
    return Judge
      .findAll({
        where: {
          name: req.query.name,
        },
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
};
