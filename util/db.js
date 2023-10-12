const Sequelize=require('sequelize');
const sequelize=new Sequelize('attendance','root','Jhumpu@234',{ dialect:'mysql',host:'localhost'});

module.exports = sequelize;