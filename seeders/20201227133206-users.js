'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    await queryInterface.bulkInsert(
      "users",
      [
        {          
          email:"1234@1234.com",
          password:"1234",
          phone:"010-1234-1234",
          username:"김코딩",
          photos:"",
          createdAt: date,
          updatedAt: date
        },
        {          
          email:"5678@5678.com",
          password:"5678",
          phone:"010-5678-5678",
          username:"홍길동",
          photos:"",
          createdAt: date,
          updatedAt: date
        }
      ]
    )
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "users",
      {
        username:[
            "김코딩",
            "홍길동"
          ]
        
      }
    )
  }
};
