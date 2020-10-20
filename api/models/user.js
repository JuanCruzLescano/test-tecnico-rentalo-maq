module.exports = (sequelize, DataTypes) => {

    const User = sequelize.define('user', {
        firstName : {
            type : DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        lastName : {
            type : DataTypes.STRING,
            allowNull : false,
        },
        email : {
            type: DataTypes.STRING,
            allowNull : false,
            validate: {
                isEmail: true
            },
            unique: true
        },
    });
    return User
}