'use strict';
module.exports = (sequelize, DataTypes) => {
  const dispositif = sequelize.define('dispositif', {
    label: DataTypes.STRING
  }, {});
  dispositif.associate = function (models) {
    dispositif.hasMany(models.epreuve);
  }
  return dispositif;
};