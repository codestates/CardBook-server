'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class middle_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      middle_category.hasMany(models.subclass)
      middle_category.belongsTo(models.main_category,{
        foreignKey:"mainId"
      })
    }
  };
  middle_category.init({
    mainId: DataTypes.INTEGER,
    caategory : DataTypes.STRING
  }, {
    sequelize,
    modelName: 'middle_category',
  });
  return middle_category;
};