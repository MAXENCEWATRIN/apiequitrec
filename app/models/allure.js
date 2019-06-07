'use strict';
module.exports = (sequelize, DataTypes) => {
  const allure = sequelize.define('allure', {
    score: DataTypes.INTEGER
  }, {});
  allure.associate = function (models) {
    allure.belongsTo(models.utilisateur);
  };
  return allure;
};