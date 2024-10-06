import express from "express";
import { connectDB } from "./database/connectDB.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world!");
});

app.listen(3000, ()=>{
    connectDB();
    console.log("Server is ruuning on port 3000");
})