const Participant = require('../models').Participant;

module.exports = {
  create(req, res) {
    return Participant
      .create({
        name: req.query.name,
        address: req.query.address,
        type: req.query.type,
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Participant
      .destroy({
        where: {
          name: req.query.name,
        },
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Participant
      .findOne({
        where: {
          name: req.query.name,
        },
      })
      .then(participant => {
        if (!participant) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return participant
          .updateAttributes({
            name: req.query.new_name,
            address: req.query.new_address,
            type: req.query.new_type,
          })
          .then(() => res.status(200).send(participant))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Participant
      .all()
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  find(req, res) {
    return Participant
      .findAll({
        where: {
          name: req.query.name,
        },
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
};
