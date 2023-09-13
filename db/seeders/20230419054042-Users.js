'use strict';
const array = [
  {
    name: "Сергей Мазаев",
    email: "podkapot@magia.ge",
    password: "$2b$10$w2AItJTGZJARrwmiIQEGUOPS1TT7mVD04BsiIgVZ8VbU9dacfA2Pu",
    role: true,
  },
  {
    name: "Денис Образцов",
    email: "proverim@podkapot.ru",
    password: "$2b$10$vKkW3bS/PMVkTgm/KGSVA.o.TMf1Wd0/7vjsN6NpowOEd8v0uHTRW",
    role: false,
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', array, {});
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
