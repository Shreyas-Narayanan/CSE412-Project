const express = require("express");
const app = express();
const cors = require('cors');
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());

//get all cars
app.get("/cars", async(req,res) => {
    try {
        const allCars = await pool.query("SELECT * FROM car_information ORDER BY car_id");
        res.json(allCars.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a car
app.get("/cars/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM car_information WHERE car_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a car
app.post("/cars", async(req, res) => {
    //await
    try {
        const {type, make, model, year, isNew, color, price} = req.body;
        const newCar = await pool.query("INSERT INTO car_information VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7) RETURNING *", 
            [type, make, model, year, isNew, color, price]
        );
        res.json(newCar.rows[0]);
        res.json("Car added to database!");
    } catch (err) {
        console.error(err.message);
    }
});

//update a car
app.put("/cars/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {type, make, model, year, isNew, color, price} = req.body;
        const updateCar = await pool.query("UPDATE car_information SET type = $1, make = $2, model = $3, year = $4, new = $5, color = $6, price = $7 WHERE car_id = $8", 
            [type, make, model, year, isNew, color, price, id]
        );

        res.json("Car was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a car
app.delete("/cars/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteCar = await pool.query("DELETE FROM car_information WHERE car_id = $1", [id]);

        res.json("Car was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});





//get all sales
app.get("/sales", async(req,res) => {
    try {
        const allSales = await pool.query("SELECT * FROM sales_report ORDER BY sales_id");
        res.json(allSales.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a sale
app.get("/sales/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM sales_report WHERE sales_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a sale
app.post("/sales", async(req, res) => {
    //await
    try {
        const {car_id, customer_id, salesman_id, date} = req.body;
        const newCar = await pool.query("INSERT INTO sales_report VALUES (DEFAULT, $1, $2, $3, $4) RETURNING *", 
            [car_id, customer_id, salesman_id, date]
        );
        res.json(newCar.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a sale
app.put("/sales/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {car_id, customer_id, salesman_id, date} = req.body;
        const updateSale = await pool.query("UPDATE sales_report SET car_id = $1, customer_id = $2, salesman_id = $3, date = $4 WHERE sales_id = $5", 
            [car_id, customer_id, salesman_id, date, id]
        );

        res.json("Sale was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a sale
app.delete("/sales/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteCar = await pool.query("DELETE FROM sales_report WHERE sales_id = $1", [id]);

        res.json("Sale was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});






//get all customers
app.get("/customers", async(req,res) => {
    try {
        const allCustomers = await pool.query("SELECT * FROM customer_information ORDER BY customer_id");
        res.json(allCustomers.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a customer
app.get("/customers/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM customer_information WHERE customer_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a customer
app.post("/customers", async(req, res) => {
    //await
    try {
        const {first_name, last_name, phone_number, address, city, postal_code, state, country} = req.body;
        const newCust = await pool.query("INSERT INTO customer_information VALUES (DEFAULT, $1, $2, $3, $4, $5, $6, $7, $8) RETURNING *", 
            [first_name, last_name, phone_number, address, city, postal_code, state, country]
        );
        res.json(newCust.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a customer
app.put("/customers/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {first_name, last_name, phone_number, address, city, postal_code, state, country} = req.body;
        const updateCust = await pool.query("UPDATE customer_information SET first_name = $1, last_name = $2, phone_number = $3, address = $4, city = $5, postal_code = $6, state = $7, country = $8 WHERE customer_id = $9", 
            [first_name, last_name, phone_number, address, city, postal_code, state, country, id]
        );

        res.json("Customer was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a customer
app.delete("/customers/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteCust = await pool.query("DELETE FROM customer_information WHERE customer_id = $1", [id]);

        res.json("Customer was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});






//get all salesman
app.get("/salesman", async(req,res) => {
    try {
        const allSalesman = await pool.query("SELECT * FROM salesman_information ORDER BY salesman_id");
        res.json(allSalesman.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a salesman
app.get("/salesman/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM salesman_information WHERE salesman_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a salesman
app.post("/salesman", async(req, res) => {
    //await
    try {
        const {first_name, last_name, years_worked} = req.body;
        const newMan = await pool.query("INSERT INTO salesman_information VALUES (DEFAULT, $1, $2, $3) RETURNING *", 
            [first_name, last_name, years_worked]
        );
        res.json(newMan.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a salesman
app.put("/salesman/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {first_name, last_name, years_worked} = req.body;
        const updateMan = await pool.query("UPDATE salesman_information SET first_name = $1, last_name = $2, years_worked = $3 WHERE salesman_id = $4", 
            [first_name, last_name, years_worked, id]
        );

        res.json("Salesman was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a salesman
app.delete("/salesman/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteCust = await pool.query("DELETE FROM salesman_information WHERE salesman_id = $1", [id]);

        res.json("Salesman was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});





//get all maintenance report
app.get("/maintenance", async(req,res) => {
    try {
        const allMaintenance = await pool.query("SELECT * FROM maintenance_report ORDER BY ticket_id");
        res.json(allMaintenance.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a maintenance
app.get("/maintenance/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM maintenance_report WHERE ticket_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a maintenance
app.post("/maintenance", async(req, res) => {
    //await
    try {
        const {car_id, customer_id, mechanic_id, car_issue, date_received, date_returned} = req.body;
        const newMaintenance = await pool.query("INSERT INTO maintenance_report VALUES (DEFAULT, $1, $2, $3, $4, $5, $6) RETURNING *", 
            [car_id, customer_id, mechanic_id, car_issue, date_received, date_returned]
        );
        res.json(newMaintenance.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a maintenance
app.put("/maintenance/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {car_id, customer_id, mechanic_id, car_issue, date_received, date_returned} = req.body;
        const updateMaintenance = await pool.query("UPDATE maintenance_report SET car_id = $1, customer_id = $2, mechanic_id = $3, car_issue = $4, date_received = $5, date_returned = $6 WHERE ticket_id = $7", 
            [car_id, customer_id, mechanic_id, car_issue, date_received, date_returned, id]
        );

        res.json("Maintenance was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a maintenance
app.delete("/maintenance/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteCust = await pool.query("DELETE FROM maintenance_report WHERE ticket_id = $1", [id]);

        res.json("Maintenance was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});






//get all mechanics
app.get("/mechanics", async(req,res) => {
    try {
        const allMechanics = await pool.query("SELECT * FROM mechanic_information ORDER BY mechanic_id");
        res.json(allMechanics.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a mechanics
app.get("/mechanics/:id", async(req, res) => {
    try {
        const {id} = req.params;
        const todo = await pool.query("SELECT * FROM mechanic_information WHERE mechanic_id = $1", [id]);

        res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//create a mechanics
app.post("/mechanics", async(req, res) => {
    //await
    try {
        const {first_name, last_name, years_worked} = req.body;
        const newMan = await pool.query("INSERT INTO mechanic_information VALUES (DEFAULT, $1, $2, $3) RETURNING *", 
            [first_name, last_name, years_worked]
        );
        res.json(newMan.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a mechanics
app.put("/mechanics/:id", async(req,res) => {
    try {
        const {id} = req.params;
        const {first_name, last_name, years_worked} = req.body;
        const updateMan = await pool.query("UPDATE mechanic_information SET first_name = $1, last_name = $2, years_worked = $3 WHERE mechanic_id = $4", 
            [first_name, last_name, years_worked, id]
        );

        res.json("Mehanics was updated!");
    } catch (err) {
        console.error(err.message);
    }
});

//delete a mechanics
app.delete("/mechanics/:id", async (req,res) => {
    try {
        const {id} = req.params;
        const deleteCust = await pool.query("DELETE FROM mechanic_information WHERE mechanic_id = $1", [id]);

        res.json("Mechanic was deleted!");
    } catch (err) {
        console.error(err.message);
    }
});






app.listen(5000, () => {
    console.log("server has started on port 5000");
});

