'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mylists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.mylists.belongsTo(models.users,{
      //   foreginKey:"id"
      // });
      // models.mylists.belongsTo(models.contents,{
      //   foreginKey:"id"
      // });
    }
  };
  mylists.init({
    cId : DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'mylists',
  });
  return mylists;
};