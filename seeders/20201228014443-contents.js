'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    await queryInterface.bulkInsert(
      'contents',
      [
        {
          userId:1,
          title:'테스트',
          // images:'',
          content:'테스트중입니다아.',
          hit:0,
          subclassId:1,
          createdAt : date,
          updatedAt : date
        },
        {
          userId:1,
          title:'테스트',
          // images:'',
          content:'테스트중입니다아.',
          hit:0,
          subclassId:1,
          createdAt : date,
          updatedAt : date
        },
        {
          userId:2,
          title:'테스트',
          // images:'',
          content:'테스트중입니다아.',
          hit:0,
          subclassId:1,
          createdAt : date,
          updatedAt : date
        }

      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(
      "contents",
      {
        userId:[
            1,
            2,
          ]
        
      }
    );
  }
};
