'use strict';
module.exports = (sequelize, DataTypes) => {
  const style = sequelize.define('style', {
    score: DataTypes.INTEGER
  }, {});
  style.associate = function (models) {
    style.belongsTo(models.utilisateur);
  };
  style.associate = function (models) {
    style.hasMany(models.note);
  };
  return style;
};