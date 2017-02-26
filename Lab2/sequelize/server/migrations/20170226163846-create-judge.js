module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.createTable('Judges', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.SERIAL,
      },
      name: {
        type: Sequelize.STRING,
      },
      room: {
        type: Sequelize.INTEGER,
      },
      ext: {
        type: Sequelize.STRING,
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
    queryInterface.dropTable('Judges'),
};
