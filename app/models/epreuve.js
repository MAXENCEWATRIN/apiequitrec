'use strict';
module.exports = (sequelize, DataTypes) => {
  const epreuve = sequelize.define('epreuve', {
    label: DataTypes.STRING
  }, {});
  epreuve.associate = function (models) {
    epreuve.belongsTo(models.dispositif);
  };
  epreuve.associate = function (models) {
    epreuve.hasMany(models.note);
  };
  return epreuve;
};