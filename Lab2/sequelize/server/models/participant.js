module.exports = (sequelize, DataTypes) => {
  const Participant = sequelize.define('Participant', {
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    type: {
      type: DataTypes.STRING,
      validate: {
        isIn: [['claimant', 'respondent']],
      },
    },
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
  });
  return Participant;
};
