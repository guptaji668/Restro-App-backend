
import  express  from "express";
import cors from "cors"
// import { sequelize } from "./models/index.js";
import Users from "./models/user.js";
import { sequelize } from "./models/index.js";
import Orders from "./models/order.js";
import MenuItems from "./models/menu.js";
import registerRouter from "./routes/register.js"
import loginRouter from "./routes/loginUser.js"
import orderRouter from "./routes/order.js"
import menuItemRouter from "./routes/menuItem.js"


const app=express()
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("hello world")
})

//  sequelize.sync({ force: true });
// sequelize.sync({ force:false, alter: true, logging: false }).then(() => {
//   console.log("Database synced");
// }).catch((err) => {
//   console.error(err);
// });
// Users.sync({force:true})
// MenuItems.sync({force:true})
// Orders.sync({force:true})
// import("./models/begin.js")

// Routes
app.use('/order', orderRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/menu',menuItemRouter)


app.listen(5000,()=>{
    console.log("server is running on port 5000")
})