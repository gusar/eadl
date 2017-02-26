const Case = require('../models').Case;

module.exports = {
  create(req, res) {
    return Case
    .findOne({
      where: {
        name: req.query.name,
      },
    })
      .then((mycase) => {
        if (!mycase) {
          return mycase
            .create({
              start_date: req.query.start_date,
              duration: req.query.duration,
              result: req.query.result,
              judge_id: req.query.judge_id,
              courtroom_id: req.query.courtroom_id,
              claimant_id: req.query.claimant_id,
              respondent_id: req.query.respondent_id,
            })
            .then(name => res.status(201).send(name))
            .catch(error => res.status(400).send(error));
        }
        return mycase;
      })
      .catch(error => res.status(400).send(error));
  },
  delete(req, res) {
    return Case
      .destroy({
        where: {
          name: req.query.name,
        },
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  update(req, res) {
    return Case
      .findOne({
        where: {
          name: req.query.name,
        },
      })
      .then((mycase) => {
        if (!mycase) {
          return res.status(404).send({
            message: 'Not Found',
          });
        }
        return mycase
          .updateAttributes({
            name: req.query.new_name,
            room: req.query.new_room,
            ext: req.query.new_ext,
          })
          .then(() => res.status(200).send(mycase))
          .catch(error => res.status(400).send(error));
      })
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Case
      .all()
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
  find(req, res) {
    return Case
      .findAll({
        where: {
          name: req.query.name,
        },
      })
      .then(name => res.status(201).send(name))
      .catch(error => res.status(400).send(error));
  },
};
