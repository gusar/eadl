module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Cases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      judge_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Judges',
          key: 'id',
          as: 'judge_id',
        },
      },
      courtroom_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Courtrooms',
          key: 'id',
          as: 'courtroom_id',
        },
      },
      claimant_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Participants',
          key: 'id',
          as: 'participant_id',
        },
      },
      respondent_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Participants',
          key: 'id',
          as: 'participant_id',
        },
      },
      start_date: {
        type: Sequelize.DATE,
      },
      duration: {
        type: Sequelize.INTERVAL,
      },
      result: {
        type: Sequelize.BOOLEAN,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    }),
  down: (queryInterface, Sequelize) =>
    queryInterface.dropTable('Cases'),
};
