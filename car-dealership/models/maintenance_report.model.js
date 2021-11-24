module.exports = (sequelize, Sequelize) => {
    const maintenance_report = sequelize.define("maintenance_report", {
      ticket_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true // Auto converts to Serial in Postgres
      },
      car_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      customer_id: {
        type: DataTypes.INTEGER
      },
      mechanic_id: {
        type: DataTypes.INTEGER
      },
      car_issue: {
        type: DataTypes.TEXT
      },
      date_received: {
        type: DataTypes.DATE
      },
      date_returned: {
        type: DataTypes.DATE
      }
    });
  
    return maintenance_report;
  };