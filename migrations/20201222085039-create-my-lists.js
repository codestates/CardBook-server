'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('myLists', {      
      userId: {
        type: Sequelize.STRING
      },
      cId : {
        type : Sequelize.INTEGER
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('myLists');
  }
};