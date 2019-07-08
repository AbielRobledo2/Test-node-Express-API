'use strict';
module.exports = (sequelize, DataTypes) => {
  const ProductState = sequelize.define('ProductState', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true
    }
  }, {});
  ProductState.associate = function(models) {
    // associations can be defined here
    ProductState.hasMnay(models.Product, {foreignkey: 'ProducStateId', as: 'products'})

  };
  return ProductState;
};
