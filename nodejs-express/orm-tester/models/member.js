import sequelize from "./model.js";
import Sequelize from "sequelize";
const Member = sequelize.define('member',{
    name : Sequelize.STRING,
    password : Sequelize.STRING,
    active : Sequelize.TINYINT
});
export default Member;