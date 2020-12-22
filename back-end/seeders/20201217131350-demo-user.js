'use strict';
  module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Users', [
      {
        userName: 'admin',
        email: 'admin@admin.com',
        password: "RootAzerty1234A!",
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
        userName: 'sasha',
        email: 'sasha@sasha.com',
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
      },
      {
        userName: 'test',
        email: 'test@test.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Gabriel',
        email: 'Gabriel@Gabriel.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Léo',
        email: 'Léo@Léo.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Raphaël',
        email: 'Raphaël@Raphaël.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Louis',
        email: 'Louis@Louis.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Lucas',
        email: 'Lucas@Lucas.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Adam',
        email: 'Adam@Adam.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Jules',
        email: 'Jules@Jules.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Hugo',
        email: 'Hugo@Hugo.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Maël',
        email: 'Maël@Maël.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Liam',
        email: 'Liam@Liam.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Noah',
        email: 'Noah@Noah.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Paul',
        email: 'Paul@Paul.com',
        password: 'azerty1234A!',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Ethan',
        email: 'Ethan@Ethan.com',
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

