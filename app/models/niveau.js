'use strict';
module.exports = (sequelize, DataTypes) => {
  const niveau = sequelize.define('niveau', {
    label: DataTypes.STRING
  }, {});
  niveau.associate = function (models) {
    niveau.hasMany(models.dossard);
  }
  return niveau;
};