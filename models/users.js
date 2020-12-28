'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      users.hasMany(models.contents);
      users.hasMany(models.mylists);
    }
  };
  users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    phone : DataTypes.STRING,
    username : DataTypes.STRING,
    photos : DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};