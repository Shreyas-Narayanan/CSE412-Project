const db = require("../models");
const Car_info = db.car_information;
const Op = db.Sequelize.Op;

// Create and Save a new car_information entry
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
        return;
    }

    // Create a Tutorial
    const car_information = {
        car_id: req.body.car_id,
        description: req.body.description,
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        new: req.body.new,
        color: req.body.color,
        price: req.body.price,
    };

    // Save Car_info in the database
    Car_info.create(car_information)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Tutorial."
            });
        });
};

// Find all car_information entries for a make
exports.findAllMake = (req, res) => {
    const make = req.query.make;
    var condition = make ? { make: { [Op.iLike]: `%${make}%` } } : null;
  
    Car_info.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving car information entries."
        });
      });
  };

// Find car_information by car_id
exports.findOne = (req, res) => {
    const car_id = req.params.car_id;
  
    Car_info.findByPk(car_id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Cannot find car_information with id=${car_id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving car_information with id=" + car_id
        });
      });
};

// Update car_information through car_id
exports.update = (req, res) => {
    const car_id = req.params.car_id;
  
    Car_info.update(req.body, {
      where: { car_id: car_id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "car_information was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update car_information with id=${car_id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating car_information with id=" + car_id
        });
      });
};

