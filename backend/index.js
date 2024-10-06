import express from "express";
import { connectDB } from "./database/connectDB.js";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Server is ruuning on port: ", PORT);
});
