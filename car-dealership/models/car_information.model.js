module.exports = (sequelize, Sequelize) => {
    const car_information = sequelize.define("car_information", {
      car_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      description: {
        type: DataTypes.TEXT
      },
      make: {
        type: DataTypes.TEXT
      },
      model: {
        type: DataTypes.TEXT
      },
      year: {
        type: DataTypes.INTEGER
      },
      new: {
        type: DataTypes.BOOLEAN
      },
      color: {
        type: DataTypes.TEXT
      },
      price: {
        type: DataTypes.INTEGER
      }
    });
  
    return car_information;
  };