'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('subclasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      middleId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'middle_categories',
          key:'mainId'
        }
      },
      category : {
        type : Sequelize.STRING
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('subclasses');
  }
};