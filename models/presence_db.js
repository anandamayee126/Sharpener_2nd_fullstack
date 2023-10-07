const Sequelize= require('sequelize');
const sequelize= require('../database/db');
const presence_model= sequelize.define('presence',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    present:{
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports= presence_model;