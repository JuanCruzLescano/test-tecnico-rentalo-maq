module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        firstName : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        email : {
            type: DataTypes.STRING,
            allowNull : false,
            timestamps: false,
            validate: {
              isEmail: true
            }
        },
    });
    return User
}