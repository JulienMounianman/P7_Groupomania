'use strict';
const bcrypt = require('bcrypt');
const password = "";
bcrypt.hash('1234', 10).then(hash => {password = hash})
module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [{
        userName: 'Julien',
        email: 'julien@email.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'admin',
        email: 'admin@admin.com',
        password: password,
        isAdmin: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'arthur',
        email: 'arthur@arthur.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'macron',
        email: 'macron@macron.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'sophie',
        email: 'sophie@sophie.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'anna',
        email: 'anna@anna.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'elton',
        email: 'elton@elton.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
