const { DataTypes } = require('sequelize');
const db = require('./db');
const User = require('./user');

const Laundry = db.define('Laundry', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Laundry.belongsTo(User, { as: 'createdBy' });

module.exports = Laundry;
