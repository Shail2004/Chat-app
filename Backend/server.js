import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import { connectDB } from "./data/database.js";

//initializing express
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)


//Using Routes
app.use("/api/auth", authRoutes);

//Basic Route to check if the server is working
app.get("/", (req, res) => {
  res.send("Hello World!!");
});

app.listen(5000, () => {
  connectDB();
  console.log("Server is running on port 5000");
});
