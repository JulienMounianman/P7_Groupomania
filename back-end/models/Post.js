const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Post extends Model { }

Post.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
    }
}, {
    sequelize,
    modelName: 'Post'
});

Post.associate = function (models) {
    models.Post.belongsTo(models.User, { foreignKey: {allowNull: false}});
};

module.exports = Post;

