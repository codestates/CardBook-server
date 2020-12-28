'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('contents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,     
        references:{
          model: 'users',
          key:'id'
        }
      },
      title : {
        type: Sequelize.STRING
      },
      imeges : {
        type:Sequelize.STRING
      },
      content : {
        type:Sequelize.STRING
      },
      hit :{
        type: Sequelize.INTEGER
      },
      subclassId : {
        type:Sequelize.INTEGER,
        references:{
          model: 'subclasses',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
    .catch(err=>console.log(err))
    
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('contents');
  }
};