const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = new Sequelize('groupomania', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

class User extends Model {}


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

module.exports = User;