'use strict';
module.exports = (sequelize, DataTypes) => {
  const utilisateur = sequelize.define('utilisateur', {
    identifiant: DataTypes.STRING,
    motdepasse: DataTypes.STRING
  }, {});
  utilisateur.associate = function (models) {
    utilisateur.belongsTo(models.role);
  };
  return utilisateur;
};