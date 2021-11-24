module.exports = (sequelize, Sequelize) => {
  const customer_information = sequelize.define("customer_information", {
    customer_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true // Auto converts to Serial in Postgres
    },
    first_name: {
      type: DataTypes.TEXT
    },
    last_name: {
      type: DataTypes.TEXT
    },
    phone_number: {
      type: DataTypes.TEXT
    },
    address: {
      type: DataTypes.TEXT
    },
    city: {
      type: DataTypes.TEXT
    },
    postal_code: {
      type: DataTypes.TEXT
    },
    state: {
      type: DataTypes.TEXT
    },
    country: {
      type: DataTypes.TEXT
    }
  });

  return customer_information;
};