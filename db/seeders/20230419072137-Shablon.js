'use strict';
const array = [
  {
    employee: "Nikita",
    leader: "Salamaleykym",
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
    task8: "Biba Boba Zoka",
    task9: false,
    task10: false,
    task11: false,
    task12: false,
    userId: 1
  },
  {
    employee: "Viper",
    leader: "Brimstoune",
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
    task8: "Chamber Sage Jett",
    task9: false,
    task10: false,
    task11: false,
    task12: false,
    userId: 1
  },
  {
    employee: "Kirill",
    leader: "Fkankenshtein",
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
    task8: "Toka Moka Poka",
    task9: false,
    task10: false,
    task11: false,
    task12: false,
    userId: 1
  },
  {
    employee: "Aleksandr",
    leader: "Abramovich",
    task1: false,
    task2: false,
    task3: false,
    task4: false,
    task5: false,
    task6: false,
    task7: false,
    task8: "Ziga Piga Higa",
    task9: false,
    task10: false,
    task11: false,
    task12: false,
    userId: 1
  }
]
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Shablons', array, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Shablons', null, {});
  }
};
