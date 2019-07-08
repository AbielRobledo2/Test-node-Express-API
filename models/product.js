'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: false
    },
    photo: {
      type: DataTypes.BLOP,
      allowNull: false
    },
    categoryld: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productStateld: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    }
  }, {});
  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsToMany(models.User, {foreignkey: 'userId', as: 'user'});
    Product.belongsToMany(models.Category, {foreignkey: 'categoryId', as: 'category'})
    Product.belongsTo(models.productState, {foreignkey: 'productStateId', as: 'state'})
  };
  return product;
};

