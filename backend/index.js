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

// ✅ Corrected CORS configuration
const corsOptions = {
  origin: [
    "https://fusioninvestt.vercel.app",
    "https://fusioninvest-dash.vercel.app"
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ Routes
app.post("/addNewUser", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    let addNewUser = new userModel({
      email: req.body.email,
      password: password,
    });

    await addNewUser.save();
    res.status(201).send("User saved");
  } catch (error) {
    res.status(500).send("Error saving user");
  }
});

// ✅ Auth & User Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ✅ Orders and Holdings APIs
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Error fetching holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Error fetching positions" });
  }
});

app.post("/newOrder", async (req, res) => {
  try {
    let newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.send("Order saved!");
  } catch (err) {
    res.status(500).send("Error saving order");
  }
});

app.get("/", (req, res) => {
  res.send("FusionInvest backend is running!");
});

// ✅ MongoDB + Server Start
app.listen(PORT, async () => {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error("MongoDB connection error:", err);
  }
});
