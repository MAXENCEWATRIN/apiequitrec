'use strict';
module.exports = (sequelize, DataTypes) => {
  const role = sequelize.define('role', {
    label: DataTypes.STRING
  }, {});
  role.associate = function (models) {
    role.hasMany(models.utilisateur);
  }
  return role;
};