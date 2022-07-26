import {Sequelize,DataTypes} from "sequelize";
const sequelize = new Sequelize("web","root","",{
    host : 'localhost',
    dialect : 'mysql'
});

export {sequelize,DataTypes};