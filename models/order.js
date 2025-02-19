import { Sequelize, sequelize } from "./index.js";
import MenuItems from "./menu.js";
import Users from "./user.js";

const Orders = sequelize.define("order_database", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id:{
    type:Sequelize.INTEGER,
    references:{
        model:Users,
        key:"id"
    },
    allowNull:false
  },
  item_id:{
    type:Sequelize.INTEGER,
    references:{
        model:MenuItems,
        key:"id"
    },
    allowNull:false
  },
  status:{
    type: Sequelize.INTEGER,
    defaultValue:0  // 0 pending 1- shipped
  },
  order_date:{
    type:Sequelize.DATE
  }
});

Orders.belongsTo(Users, { foreignKey: "user_id", as: "user" });
Orders.belongsTo(MenuItems, { foreignKey: "item_id", as: "items" });
export default Orders
