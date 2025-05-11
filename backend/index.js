// index.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import passport from 'passport';
import bodyParser from 'body-parser';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import cookieParser from 'cookie-parser';

import authRouter from './routes/authRouter.js';
import userModel from './model/userModel.js';
import { HoldingsModel } from './model/HoldingsModel.js';
import { PositionsModel } from './model/PositionsModel.js';
import { OrdersModel } from './model/OrdersModel.js';
import userRouter from './routes/userRouter.js';

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// ✅ Fixed: Removed trailing slashes from origins
const corsOptions = {
  origin: [
    "https://fusioninvest-7w6c-git-main-vivekkk004s-projects.vercel.app",
    "https://fusioninvest-dash.vercel.app"
  ],
  credentials: true,
};

// ✅ Apply CORS before any routes
app.use(cors(corsOptions));

// ✅ Optionally handle preflight requests
app.options("*", cors(corsOptions));

app.use(cookieParser());
app.use(express.json());

// ✅ API Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ✅ Utility Routes
app.get("/", (req, res) => {
  res.send("Backend is running");
});

app.post("/addNewUser", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    const addNewUser = new userModel({
      email: req.body.email,
      password: password,
    });

    await addNewUser.save();
    res.status(201).send("User saved");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving user");
  }
});

app.get("/allHoldings", async (req, res) => {
  try {
    const allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    const allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (error) {
    res.status(500).json({ message: "Error fetching positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (error) {
    res.status(500).send("Error saving order");
  }
});

// ✅ Start server and DB connection
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  mongoose.connect(uri)
    .then(() => console.log("DB connected!"))
    .catch((err) => console.error("DB connection error:", err));
});
