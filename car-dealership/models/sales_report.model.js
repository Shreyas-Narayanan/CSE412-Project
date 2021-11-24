module.exports = (sequelize, Sequelize) => {
    const sales_report = sequelize.define("sales_report", {
      sales_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true // Auto converts to Serial in Postgres
      },
      car_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      customer_id: {
        type: Sequelize.INTEGER
      },
      salesman_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return sales_report;
  };