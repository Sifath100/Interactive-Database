const express=require("express")
const app=express()
const dotenv=require("dotenv")
const morgan=require("morgan")
const bodyparser=require("body-parser")
const path=require("path")
const connectDB=require("./server/database/connection")

dotenv.config({path:"config.env"})

const port=process.env.port || 8080

app.use(morgan("tiny"))
app.use(bodyparser.urlencoded({extended:true})) 

//calling the connection 
connectDB()

app.set("view engine","ejs")
// app.set("views",path.resolve(__dirname,"views/ejs"))

//load assests
app.use("/css",express.static(path.resolve(__dirname,"assets/css")))
app.use("/js",express.static(path.resolve(__dirname,"assets/js")))

//load routes

app.use("/",require("./server/routes/router"))
app.listen(port,console.log("wohooo"))
