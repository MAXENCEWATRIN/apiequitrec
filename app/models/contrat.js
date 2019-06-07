'use strict';
module.exports = (sequelize, DataTypes) => {
  const contrat = sequelize.define('contrat', {
    score: DataTypes.INTEGER
  }, {});
  contrat.associate = function (models) {
    contrat.belongsTo(models.utilisateur);
  };
  contrat.associate = function (models) {
    contrat.hasMany(models.note);
  };
  return contrat;
};