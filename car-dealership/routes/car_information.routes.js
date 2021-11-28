module.exports = app => {
    const car_information = require("../controllers/car_information.controller.js");
  
    var router = require("express").Router();
  
    // Create a new car_information
    router.post("/", car_information.create);
  
    // Retrieve all car_information
    router.get("/", car_information.findAll);
  
    // Retrieve a single car_information with id
    router.get("/:id", car_information.findOne);
  
    // Update a Tutorial with id
    router.put("/:id", car_information.update);
  
    app.use('/api/car_information', router);
  };