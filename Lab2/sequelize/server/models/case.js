module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    claimant_id: DataTypes.INTEGER,
    respondent_id: DataTypes.INTEGER,
    start_date: DataTypes.DATE,
    duration: DataTypes.INTERVAL,
    result: DataTypes.BOOLEAN,
  }, {
    classMethods: {
      associate: (models) => {
        Case.belongsTo(models.Judge, {
          foreignKey: 'id',
          as: 'judge_id',
        });
        Case.belongsTo(models.Courtroom, {
          foreignKey: 'id',
          as: 'courtroom_id',
        });
      },
    },
  });
  return Case;
};
