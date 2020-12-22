'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 1,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",    
      userId: 2,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 3,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 4,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 5,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 6,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 7,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 8,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 9,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 10,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 11,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 12,
      categoryId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 13,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 14,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 15,
      categoryId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 16,
      categoryId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 17,
      categoryId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 18,
      categoryId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      userId: 19,
      categoryId: 7,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};
