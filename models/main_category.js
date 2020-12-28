'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class main_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      main_category.hasMany(models.middle_category)
    }
  };
  main_category.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'main_category',
  });
  return main_category;
};