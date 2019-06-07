'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('notes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      observation: {
        type: Sequelize.STRING
      },
      epreuveId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'epreuves',
          key: 'id'
        },
        allowNull: false
      },
      dossardId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'dossards',
          key: 'id'
        },
        allowNull: false
      },
      contratId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'contrats',
          key: 'id'
        },
        allowNull: false
      },
      allureId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'allures',
          key: 'id'
        },
        allowNull: false
      },
      styleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'styles',
          key: 'id'
        },
        allowNull: false
      },
      penaliteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'penalites',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('notes');
  }
};