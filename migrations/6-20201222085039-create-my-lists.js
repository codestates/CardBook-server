'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('myLists', {      
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model: 'users',
          key:'id'
        }
      },
      cId : {
        type : Sequelize.INTEGER,
        references:{
          model: 'contents',
          key:'id'
        }
      },
      addedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('myLists');
  }
};