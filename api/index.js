const express=require("express");
const app =express();
const cors = require("cors");
const mongoose =require("mongoose");
const dotenv=require("dotenv")
const userRouter=require("./routes/user")
const authRouther=require("./routes/auth")
const productRouther=require("./routes/product")
const cartRouther=require("./routes/cart")
const orderRouther=require("./routes/order")

dotenv.config();
mongoose
.connect(process.env.MONGO_URL)
.then(()=>console.log("mongoDB Connection Succesfull"))
.catch((err)=> {
    console.log(err)
});

app.use(cors());
app.use(express.json())
app.use("/api/auth",authRouther)
app.use("/api/users",userRouter)
app.use("/api/products",productRouther)
app.use("/api/carts",cartRouther)
app.use("/api/orders",orderRouther)



app.listen(process.env.PORT || 5000,() => {
    console.log("backend server is running!")
})