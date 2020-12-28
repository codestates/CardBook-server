'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('middle_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      mainId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'main_categories',
          key:'id'
        }
      },
      category : {
        type : Sequelize.STRING
      }      
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('middle_categories');
  }
};