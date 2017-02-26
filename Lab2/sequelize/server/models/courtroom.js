

module.exports = (sequelize, DataTypes) => {
  const Courtroom = sequelize.define('Courtroom', {
    number: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
  });
  return Courtroom;
};
