const {DataTypes} = require("sequelize");

module.exports = (sequelize) =>{
    sequelize.define('Activity',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        dificultad:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        duracion:{
            type: DataTypes.INTEGER
        },
        temporada:{
            type: DataTypes.ENUM("Verano","Otoño","Invierno","Primavera"),
            allowNull: false,
        }
    },{ timestamps: false })
}