const Sequelize= require('sequelize');
const sequelize= require('../database/db');
const student_model= sequelize.define('student',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports= student_model;