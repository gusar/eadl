module.exports = (sequelize, DataTypes) => {
  const Judge = sequelize.define('Judge', {
    name: DataTypes.STRING,
    room: DataTypes.NUMBER,
    ext: DataTypes.STRING,
  }, {
    classMethods: {
      associate: (models) => {
        // associations can be defined here
      },
    },
  });
  return Judge;
};
