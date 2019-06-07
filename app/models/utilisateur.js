'use strict';
module.exports = (sequelize, DataTypes) => {
  const utilisateur = sequelize.define('utilisateur', {
    identifiant: DataTypes.STRING,
    motdepasse: DataTypes.STRING
  }, {});
  utilisateur.associate = function(models) {
    // associations can be defined here
  };
  return utilisateur;
};