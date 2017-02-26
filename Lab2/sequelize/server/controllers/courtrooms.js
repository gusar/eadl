const Courtroom = require('../models').Courtroom;

module.exports = {
  create(req, res) {
    return Courtroom
      .create({
        number: req.query.number,
      })
      .then(number => res.status(201).send(number))
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Courtroom
      .destroy({
        where: {
          number: req.query.number,
        },
      })
      .then(number => res.status(201).send(number))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Courtroom
      .findOne({
        where: {
          number: req.query.number,
        },
      })
      .then(courtroom => {
        if (!courtroom) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return courtroom
          .updateAttributes({
            number: req.query.new_number,
          })
          .then(() => res.status(200).send(courtroom))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Courtroom
      .all()
      .then(number => res.status(201).send(number))
      .catch(error => res.status(400).send(error));
  },
  find(req, res) {
    return Courtroom
      .findAll({
        where: {
          number: req.query.number,
        },
      })
      .then(number => res.status(201).send(number))
      .catch(error => res.status(400).send(error));
  },
};
