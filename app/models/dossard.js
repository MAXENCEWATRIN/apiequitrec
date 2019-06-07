'use strict';
module.exports = (sequelize, DataTypes) => {
  const dossard = sequelize.define('dossard', {
    numero: DataTypes.INTEGER
  }, {});
  dossard.associate = function (models) {
    dossard.belongsTo(models.niveau);
  };
  dossard.associate = function (models) {
    dossard.hasMany(models.note);
  };
  return dossard;
};