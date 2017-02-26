const Participant = require('./server/models').Participant;
const Judge = require('./server/models').Judge;
const Courtroom = require('./server/models').Courtroom;
const Case = require('./server/models').Case;


Judge.sync().then(() => {
  return Judge.create({
    name: 'Bill',
    room: '001',
    ext: '01',
  });
});

Judge.sync().then(() => {
  return Judge.create({
    name: 'Ted',
    room: '002',
    ext: '02',
  });
});

Courtroom.sync().then(() => {
  return Courtroom.create({
    number: '001',
  });
});

Courtroom.sync().then(() => {
  return Courtroom.create({
    number: '002',
  });
});

Participant.sync().then(() => {
  return Participant.create({
    name: 'John',
    address: 'Main rd',
    type: 'claimant',
  });
});

Participant.sync().then(() => {
  return Participant.create({
    name: 'Paul',
    address: 'Minor rd',
    type: 'respondent',
  });
});

Case.sync().then(() => {
  return Case.create({
    judge_id: 1,
    courtroom_id: 1,
    claimant_id: 1,
    respondent_id: 2,
    start_date: 250517,
    duration: 30,
  });
});

Case.sync().then(() => {
  return Case.create({
    judge_id: 2,
    courtroom_id: 1,
    claimant_id: 1,
    respondent_id: 2,
    start_date: 250517,
    duration: 30,
    result: true,
  });
});
