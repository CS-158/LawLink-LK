import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.js";
import connectDB from "./config/db.js";

dotenv.config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
connectDB();

// Routes
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
