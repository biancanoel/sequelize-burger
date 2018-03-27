module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
            timestamps: false
        });
    return Burger;
};