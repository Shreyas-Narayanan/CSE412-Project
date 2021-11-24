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