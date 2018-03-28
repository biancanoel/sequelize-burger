module.exports = function (sequelize, DataTypes) {
    var Burger = sequelize.define("burger", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        },
        price: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate : {
                isDecimal: true
            }
        }
    }, {
            timestamps: false
        });
    return Burger;
};