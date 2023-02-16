module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    title: {
      type: Sequelize.STRING
    },
    price:{
      type:Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Product;
};
