'use strict';
module.exports = (sequelize, DataTypes) => {
  const note = sequelize.define('note', {
    observation: DataTypes.STRING
  }, {});
  note.associate = function (models) {
    note.belongsTo(models.epreuve);
  };
  note.associate = function (models) {
    note.belongsTo(models.dossard);
  };
  note.associate = function (models) {
    note.belongsTo(models.contrat);
  };
  note.associate = function (models) {
    note.belongsTo(models.allure);
  };
  note.associate = function (models) {
    note.belongsTo(models.style);
  };
  note.associate = function (models) {
    note.belongsTo(models.penalite);
  };
  return note;
};