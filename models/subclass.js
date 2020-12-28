'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subclass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      subclass.hasMany(models.contents)
      subclass.belongsTo(models.middle_category,{
        foreignKey:"middleId"
      })
    }
  };
  subclass.init({
    middleId: DataTypes.INTEGER,
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'subclass',
  });
  return subclass;
};