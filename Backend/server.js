import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { connectDB } from "./data/database.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";
import { app, server } from "./socket/socket.js";

//initializing express
dotenv.config();
const PORT = process.env.PORT || 4000;

//Middlewares
app.use(express.json()); //to parse the incoming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(morgan('dev'));

//Using Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

//Basic Route to check if the server is working
app.get("/", (req, res) => {
  res.send("Working");
});

server.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
