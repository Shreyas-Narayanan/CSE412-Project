const dbConfig = require("../server/db.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.car_information = require("./car_information.model.js")(sequelize, Sequelize);
db.customer_information = require("./customer_information.model.js")(sequelize, Sequelize);
db.maintenance_report = require("./maintenance_report.model.js")(sequelize, Sequelize);
db.mechanic_information = require("./mechanic_information.model.js")(sequelize, Sequelize);
db.sales_report = require("./sales_report.model.js")(sequelize, Sequelize);
db.salesman_information = require("./salesman_information.model.js")(sequelize, Sequelize);

module.exports = db;