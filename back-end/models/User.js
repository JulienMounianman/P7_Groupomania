const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const Post = require('./Post');
class User extends Model { }


User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'User'
});

User.hasMany(Post, {as: 'Post', foreignKey: 'userId'})

module.exports = User;