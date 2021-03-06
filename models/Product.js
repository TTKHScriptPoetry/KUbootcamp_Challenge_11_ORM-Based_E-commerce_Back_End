// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,  // use the special Sequelize DataTypes object provide what type of data it is
      allowNull: false,    // this is the equivalent of SQL's `NOT NULL` option
      primaryKey: true,    // instruct that this is the Primary Key
      autoIncrement: true  // turn on auto increment
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      // Validates that the value is a decimal
      validate: {
        isDecimal: true
      }
    }, 
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      // validate that the value is numeric
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references:{
        model: 'category',
        key: 'id'
     }
    }
  },  // end of 1st object  
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }  // end of 2nd object  
);

module.exports = Product;
