import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express()

dotenv.config()

//if there is any problem with mongodb connection, it is unnecessary to use our backend server
//because it is just an api server, if there is no db connection it means there is no api request.
const connect = async () =>{
    try{
        await mongoose.connect(process.env.MONGO_DB);
        console.log("Connected to MongoDB");
    }catch(error){
        throw error;
    }
};
mongoose.connection.on("disconnected", ()=>{
    console.log("mongoDB disconnected")
})


mongoose.connection.on("connected", ()=>{
    console.log("mongoDB connected")
})

//middleware
app.use(cors());
app.use(cookieParser());
app.use(express.json());// use any body after including this code
app.use("/api/auth", authRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);

app.use((err, req,res,next)=>{
    const errorStatus = err.status || 500;
    const errorMessage = err.errorMessage || "Something went wrong!";
    return res.status(errorStatus).json({
        success : false,
        status: errorStatus,
        message:errorMessage,
        stack: err.stack

    });
}); 

//how api works in simple way
/*
app.get("/", (req,res)=>{
    res.send("first request")
})*/
//this defines a simple HTTP endpoint that can be accessed by a client application to retrieve a response. The endpoint is the root URL ("/") of the application, and when a GET request is made to this endpoint, the server responds with the "first request" message.


//Backend server
app.listen(8800, ()=>{
    connect();//connect = async()
    console.log("Connected to Backend");
});
