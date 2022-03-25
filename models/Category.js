const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,  // use the special Sequelize DataTypes object provide what type of data it is
      allowNull: false,    // this is the equivalent of SQL's `NOT NULL` option
      primaryKey: true,    // instruct that this is the Primary Key
      autoIncrement: true  // turn on auto increment
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
