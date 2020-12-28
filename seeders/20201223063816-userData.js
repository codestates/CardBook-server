'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let date = new Date();
    return queryInterface.bulkInsert('users',
    [
      {
        email: 'abcd@naver.com',
        password: '12345',
        phone: '010-0000-0000',
        username: 'fjdkjfdkjfkd',
        createdAt: date,
        updatedAt: date
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
