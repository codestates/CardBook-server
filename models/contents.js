'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contents extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      contents.hasMany(models.mylists);
      contents.belongsTo(models.users,{
        foreignKey:"id"
      })
      contents.belongsTo(models.subclass,{
        foreignKey:"id"
      })
    }
  };
  contents.init({
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    imeges : DataTypes.STRING,
    content : DataTypes.STRING,
    hit : DataTypes.INTEGER,
    subclassId : DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'contents',
  });
  return contents;
};