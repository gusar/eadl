module.exports = (sequelize, DataTypes) => {
  const Case = sequelize.define('Case', {
    start_date: DataTypes.DATE,
    duration: DataTypes.INTEGER,
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
        Case.belongsTo(models.Participant, {
          foreignKey: 'id',
          as: 'claimant_id',
        });
        Case.belongsTo(models.Participant, {
          foreignKey: 'id',
          as: 'respondent_id',
        });
      },
    },
  });
  return Case;
};
