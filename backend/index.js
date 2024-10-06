import express from "express";
import { connectDB } from "./database/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";


dotenv.config();

const app = express();

app.get("/", (req, res)=>{
    res.send("hello world!");
});

app.use("/api/auth",authRoutes);

app.listen(3000, ()=>{
    connectDB();
    console.log("Server is ruuning on port 3000");
})