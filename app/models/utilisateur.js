'use strict';
module.exports = (sequelize, DataTypes) => {
  const utilisateur = sequelize.define('utilisateur', {
    identifiant: DataTypes.STRING,
    motdepasse: DataTypes.STRING
  }, {});
  utilisateur.associate = function (models) {
    utilisateur.belongsTo(models.role);
  };
  utilisateur.associate = function (models) {
    utilisateur.hasMany(models.contrat);
  };
  utilisateur.associate = function (models) {
    utilisateur.hasMany(models.allure);
  };
  utilisateur.associate = function (models) {
    utilisateur.hasMany(models.style);
  };
  utilisateur.associate = function (models) {
    utilisateur.hasMany(models.penalite);
  };
  return utilisateur;
};