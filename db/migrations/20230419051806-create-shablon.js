'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Shablons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      employee: {
        type: Sequelize.STRING
      },
      leader: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      task1: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task2: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task3: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task4: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task5: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task6: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task7: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task8: {
        type: Sequelize.STRING,
        defaultValue: "",
      },
      task9: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task10: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task11: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      task12: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: 'Users',
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Shablons');
  }
};