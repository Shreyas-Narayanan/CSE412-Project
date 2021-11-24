module.exports = (sequelize, Sequelize) => {
    const mechanic_information = sequelize.define("mechanic_information", {
      mechanic_id: {
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
  
    return mechanic_information;
  };