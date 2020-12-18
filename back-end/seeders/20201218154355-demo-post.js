'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Posts', [{
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 1,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 2,
      categoryId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 3,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 4,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 5,
      categoryId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 1,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: 'Lorem Ipsum',
      content: "Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte.",
      imageUrl: "",
      userId: 6,
      categoryId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
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
