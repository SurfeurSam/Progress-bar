'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Shablon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" })
    }
  }
  Shablon.init({
    employee: DataTypes.STRING,
    leader: DataTypes.STRING,
    task1: DataTypes.BOOLEAN,
    task2: DataTypes.BOOLEAN,
    task3: DataTypes.BOOLEAN,
    task4: DataTypes.BOOLEAN,
    task5: DataTypes.BOOLEAN,
    task6: DataTypes.BOOLEAN,
    task7: DataTypes.BOOLEAN,
    task8: DataTypes.STRING,
    task9: DataTypes.BOOLEAN,
    task10: DataTypes.BOOLEAN,
    task11: DataTypes.BOOLEAN,
    task12: DataTypes.BOOLEAN,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Shablon',
  });
  return Shablon;
};