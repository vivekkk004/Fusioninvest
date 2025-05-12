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
import userRouter from './routes/userRouter.js';
import { HoldingsModel } from './model/HoldingsModel.js';
import { PositionsModel } from './model/PositionsModel.js';
import { OrdersModel } from './model/OrdersModel.js';
import userModel from './model/userModel.js'; // 👈 You had signupModel but it's not imported
// Make sure userModel is correctly defined with email and password fields

const app = express();
const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

// ✅ CORS Configuration
const corsOptions = {
  origin: [
    "https://fusioninvest-7w6c-git-main-vivekkk004s-projects.vercel.app",
    "https://fusioninvest-dash.vercel.app",
  ],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

// ✅ API Routes
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

// ✅ Add New User (for testing or dev setup)
app.post("/addNewUser", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new userModel({
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).send("User saved");
  } catch (err) {
    console.error("Error creating user:", err);
    res.status(500).send("Error saving user");
  }
});

// ✅ Get All Holdings
app.get("/allHoldings", async (req, res) => {
  try {
    const holdings = await HoldingsModel.find({});
    res.json(holdings);
  } catch (err) {
    res.status(500).send("Failed to fetch holdings");
  }
});

// ✅ Get All Positions
app.get("/allPositions", async (req, res) => {
  try {
    const positions = await PositionsModel.find({});
    res.json(positions);
  } catch (err) {
    res.status(500).send("Failed to fetch positions");
  }
});

// ✅ Add New Order
app.post("/newOrder", async (req, res) => {
  try {
    const newOrder = new OrdersModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
    });

    await newOrder.save();
    res.status(201).send("Order saved!");
  } catch (err) {
    console.error("Error saving order:", err);
    res.status(500).send("Failed to save order");
  }
});

// ✅ Start Server and Connect DB
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("❌ MongoDB connection failed:", err);
  });
