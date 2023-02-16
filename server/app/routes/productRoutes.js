module.exports = app => {
  const products = require("../controllers/productController.js");

  var router = require("express").Router();

  // Create a new Product
  router.post("/", products.create);

  // Retrieve all Product
  router.get("/", products.findAll);

  // Retrieve all published product
  router.get("/published", products.findAllPublished);

  // Retrieve a single product with id
  router.get("/:id", products.findOne);

  // Update a product with id
  router.put("/:id", products.update);

  // Delete a product with id
  router.delete("/:id", products.delete);

  // Delete all product
  router.delete("/", products.deleteAll);

  app.use('/api/v1/products', router);
};
