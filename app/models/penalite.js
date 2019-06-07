'use strict';
module.exports = (sequelize, DataTypes) => {
  const penalite = sequelize.define('penalite', {
    score: DataTypes.INTEGER
  }, {});
  penalite.associate = function (models) {
    penalite.belongsTo(models.utilisateur);
  };
  penalite.associate = function (models) {
    penalite.hasMany(models.note);
  };
  return penalite;
};