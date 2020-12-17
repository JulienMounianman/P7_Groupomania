const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const User = require("./User");

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
        references: {
            model: User,
            key: "userId"
        }
    }
}, {
    sequelize,
    modelName: 'Post'
});


module.exports = Post;

