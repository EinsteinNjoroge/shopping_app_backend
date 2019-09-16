module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    'Review',
    {
      review_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      customer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      review: {
        type: DataTypes.STRING(5000),
        allowNull: false,
      },
      rating: {
        type: DataTypes.SMALLINT(6),
        allowNull: false,
      },
      created_on: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      tableName: 'review',
    }
  );
  Review.associate = ({ Product, Customer }) => {
    Review.belongsTo(Product, {
      foreignKey: 'product_id',
    });
    Review.belongsTo(Customer, {
      foreignKey: 'customer_id',
    });
  };
  return Review;
};
