const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Tag extends Model {}

Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,  // use the special Sequelize DataTypes object provide what type of data it is
      allowNull: false,    // this is the equivalent of SQL's `NOT NULL` option
      primaryKey: true,    // instruct that this is the Primary Key
      autoIncrement: true  // turn on auto increment
    },
    tag_name: {
      type: DataTypes.STRING
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;
