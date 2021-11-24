module.exports = (sequelize, Sequelize) => {
    const salesman_information = sequelize.define("salesmen_information", {
      salesman_id: {
        type: DataTypes.INTEGER,
        autoIncrement: true // Auto converts to Serial in Postgres
      },
      first_name: {
        type: DataTypes.TEXT
      },
      last_name: {
        type: DataTypes.TEXT
      },
      years_worked: {
        type: DataTypes.INTEGER
      }
    });
  
    return salesman_information;
  };