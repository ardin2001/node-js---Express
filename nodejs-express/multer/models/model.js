import {Sequelize,DataTypes} from "sequelize";
const sequelize = new Sequelize("image","root","",{
    host : 'localhost',
    dialect : 'mysql'
});

export {sequelize,DataTypes};