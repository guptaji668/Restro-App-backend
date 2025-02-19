import { Sequelize, sequelize } from "./index.js";
import Users from "./user.js";

const MenuItems = sequelize.define("menu_item_database", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name:{
    type: Sequelize.STRING,
  },
  description:{
    type: Sequelize.STRING,
  },
  price:{
    type: Sequelize.DECIMAL(10,2),
  },
 

});

export default MenuItems