'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('mylists', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },   
      userId: {
        type: Sequelize.INTEGER,
        references:{
          model:'users',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'SET NULL'
      },
      cId : {
        type : Sequelize.INTEGER,
        references:{
          model:'contents',
          key:'id'
        },
        onUpdate:'CASCADE',
        onDelete: 'SET NULL'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('mylists');
  }
};