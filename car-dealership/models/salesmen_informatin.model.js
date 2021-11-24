module.exports = (sequelize, Sequelize) => {
    const salesman_information = sequelize.define("salesmen_information", {
      salesman_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true // Auto converts to Serial in Postgres
      },
      first_name: {
        type: Sequelize.TEXT
      },
      last_name: {
        type: Sequelize.TEXT
      },
      years_worked: {
        type: Sequelize.INTEGER
      }
    });
  
    return salesman_information;
  };