import {sequelize,DataTypes} from "./model.js";
const Gambar = sequelize.define('tester',{
    id_gambar : {type : DataTypes.INTEGER,primaryKey : true,autoIncrement : true},
    gambar : DataTypes.STRING
});
export default Gambar;